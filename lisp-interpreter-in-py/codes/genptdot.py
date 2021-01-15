###############################################################################
#                                                                             #
#  Parse Tree visualizer                                                      #
#                                                                             #
#  To generate an image from the DOT file run:                                #
#  $ dot -Tpng -o parsetree.png parsetree.dot                                 #
#                                                                             #
###############################################################################
import argparse
import textwrap

INTEGER, PLUS, MINUS, MUL, DIV, LPAREN, RPAREN, EOF = (
    'INTEGER', 'PLUS', 'MINUS', 'MUL', 'DIV', '(', ')', 'EOF'
)


class Token(object):
    def __init__(self, type, value):
        self.type = type
        self.value = value

    def __str__(self):
        """String representation of the class instance.
        Examples:
            Token(INTEGER, 3)
            Token(PLUS, '+')
            Token(MUL, '*')
        """
        return 'Token({type}, {value})'.format(
            type=self.type,
            value=repr(self.value)
        )

    def __repr__(self):
        return self.__str__()


class Lexer(object):
    def __init__(self, text):
        # client string input, e.g. "4 + 2 * 3 - 6 / 2"
        self.text = text
        # self.pos is an index into self.text
        self.pos = 0
        self.current_char = self.text[self.pos]

    def error(self):
        raise Exception('Invalid character')

    def advance(self):
        """Advance the `pos` pointer and set the `current_char` variable."""
        self.pos += 1
        if self.pos > len(self.text) - 1:
            self.current_char = None  # Indicates end of input
        else:
            self.current_char = self.text[self.pos]

    def skip_whitespace(self):
        while self.current_char is not None and self.current_char.isspace():
            self.advance()

    def integer(self):
        """Return a (multidigit) integer consumed from the input."""
        result = ''
        while self.current_char is not None and self.current_char.isdigit():
            result += self.current_char
            self.advance()
        return int(result)

    def get_next_token(self):
        """Lexical analyzer (also known as scanner or tokenizer)
        This method is responsible for breaking a sentence
        apart into tokens. One token at a time.
        """
        while self.current_char is not None:

            if self.current_char.isspace():
                self.skip_whitespace()
                continue

            if self.current_char.isdigit():
                return Token(INTEGER, self.integer())

            if self.current_char == '+':
                self.advance()
                return Token(PLUS, '+')

            if self.current_char == '-':
                self.advance()
                return Token(MINUS, '-')

            if self.current_char == '*':
                self.advance()
                return Token(MUL, '*')

            if self.current_char == '/':
                self.advance()
                return Token(DIV, '/')

            if self.current_char == '(':
                self.advance()
                return Token(LPAREN, '(')

            if self.current_char == ')':
                self.advance()
                return Token(RPAREN, ')')

            self.error()

        return Token(EOF, None)


class Node(object):
    def __init__(self, name):
        self.name = name
        self.children = []

    def add(self, node):
        self.children.append(node)

    def __str__(self):
        # return 'node name %s' % self.name
        return str(self.children)


class RuleNode(Node):
    pass


class TokenNode(Node):
    pass


class Parser(object):
    """Parses the input and builds a parse tree."""

    def __init__(self, lexer):
        self.lexer = lexer
        # set current token to the first token taken from the input
        self.current_token = self.lexer.get_next_token()

        # Parse tree root
        self.root = None
        self.current_node = None

    def error(self):
        raise Exception('Invalid syntax')

    def eat(self, token_type):
        # compare the current token type with the passed token
        # type and if they match then "eat" the current token
        # and assign the next token to the self.current_token,
        # otherwise raise an exception.
        if self.current_token.type == token_type:
            self.current_node.add(TokenNode(self.current_token.value))
            self.current_token = self.lexer.get_next_token()
        else:
            self.error()

    def factor(self):
        """ factor: INTEGER | LPAREN expr RPAREN """
        node = RuleNode('factor')
        self.current_node.add(node)
        _save = self.current_node
        self.current_node = node

        token = self.current_token
        if token.type == INTEGER:
            self.eat(INTEGER)
        elif token.type == LPAREN:
            self.eat(LPAREN)
            self.expr()
            self.eat(RPAREN)

        self.current_node = _save

    def term(self):
        """ term : factor (( MUL | DIV ) factor)* """
        node = RuleNode('term')
        self.current_node.add(node)
        _save = self.current_node
        self.current_node = node

        self.factor()

        while self.current_token.type in (MUL, DIV):
            token = self.current_token
            if token.type == MUL:
                self.eat(MUL)
            elif token.type == DIV:
                self.eat(DIV)

            self.factor()
        self.current_node = _save

    def expr(self):
        """
        expr   : term ((PLUS | MINUS) term)*
        term   : factor ((MUL | DIV) factor)*
        factor : INTEGER | LPAREN expr RPAREN
        """
        node = RuleNode('expr')
        if self.root is None:
            self.root = node
        else:
            self.current_node.add(node)

        _save = self.current_node
        self.current_node = node

        self.term()

        while self.current_token.type in (PLUS, MINUS):
            token = self.current_token
            if token.type == PLUS:
                self.eat(PLUS)
            elif token.type == MINUS:
                self.eat(MINUS)

            self.term()

        self.current_node = _save

    def parse(self):
        self.expr()
        return self.root


class ParseTreeVisualizer(object):
    def __init__(self, parser):
        self.parser = parser
        self.ncount = 1
        self.dot_header = [textwrap.dedent("""\
        digraph astgraph {
          node [shape=none, fontsize=12, fontname="Courier", height=.1];
          ranksep=.3;
          edge [arrowsize=.5]

        """)]
        self.dot_body = []
        self.dot_footer = ['}']

    def bfs(self, node):
        ncount = 1
        queue = []
        queue.append(node)
        s = '  node{} [label="{}"]\n'.format(ncount, node.name)
        self.dot_body.append(s)
        node._num = ncount
        ncount += 1

        while queue:
            node = queue.pop(0)
            for child_node in node.children:
                s = ' node{} [label="{}"]\n'.format(ncount, child_node.name)
                self.dot_body.append(s)
                child_node._num = ncount
                ncount += 1
                s = ' node{} -> node{}\n'.format(node._num, child_node._num)
                self.dot_body.append(s)
                queue.append(child_node)

    def gendot(self):
        tree = self.parser.parse()
        self.bfs(tree)
        return ''.join(self.dot_header + self.dot_body + self.dot_footer)


def main():
    argparser = argparse.ArgumentParser(
        description='Generate a Parse Tree DOT file.'
    )
    argparser.add_argument(
        'text',
        help='Arithmetic expression (in quotes): "1 + 2 * 3"'
    )
    args = argparser.parse_args()
    text = args.text

    lexer = Lexer(text)
    parser = Parser(lexer)

    viz = ParseTreeVisualizer(parser)
    content = viz.gendot()
    print(content)


if __name__ == '__main__':
    main()
