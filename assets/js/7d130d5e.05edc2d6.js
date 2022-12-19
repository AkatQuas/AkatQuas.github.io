"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3976],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=s,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[f]="string"==typeof e?e:s,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),s=(t(67294),t(3905));const a={title:"06",tags:["lisp","interpreter"]},i=void 0,l={unversionedId:"lisp-interpreter-in-py/chapter-06",id:"lisp-interpreter-in-py/chapter-06",title:"06",description:"In this article, we're wrapping up our discussion of arithmetic expressions by adding parenthesized expressions to the grammar and implementing an interpreter that will be able to evaluate parenthesized expressions with arbitrarily deep nesting, like 7 + 3 * (10 / (12 / 3 ) + 1 ) -1.",source:"@site/docs/lisp-interpreter-in-py/chapter-06.md",sourceDirName:"lisp-interpreter-in-py",slug:"/lisp-interpreter-in-py/chapter-06",permalink:"/docs/lisp-interpreter-in-py/chapter-06",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",frontMatter:{title:"06",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"05",permalink:"/docs/lisp-interpreter-in-py/chapter-05"},next:{title:"07",permalink:"/docs/lisp-interpreter-in-py/chapter-07"}},o={},p=[],c={toc:p};function f(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this article, we're wrapping up our discussion of arithmetic expressions by adding parenthesized expressions to the grammar and implementing an interpreter that will be able to evaluate parenthesized expressions with arbitrarily deep nesting, like ",(0,s.kt)("inlineCode",{parentName:"p"},"7 + 3 * (10 / (12 / 3 ) + 1 ) -1"),"."),(0,s.kt)("p",null,"First, we need to modify the grammar to support expressions inside parentheses. The ",(0,s.kt)("em",{parentName:"p"},"factor")," rule is used for basic units in expressions. Today, we're adding another basic unit - not just an integer - a parenthesized expression."),(0,s.kt)("p",null,"Here is the updated grammar:"),(0,s.kt)("img",{src:"./imgs/lsbasi_part6_grammar.png",alt:""}),(0,s.kt)("p",null,"The only change is in the ",(0,s.kt)("em",{parentName:"p"},"factor")," production where the terminal LPAREN represents a left parenthesis ",(0,s.kt)("em",{parentName:"p"},"("),", the terminal RPAREN represents a right parenthesis ",(0,s.kt)("em",{parentName:"p"},")"),", and the non-terminal ",(0,s.kt)("em",{parentName:"p"},"expr")," between the parentheses refers to the ",(0,s.kt)("em",{parentName:"p"},"expr")," rule."),(0,s.kt)("p",null,"Here is the updated syntax diagram for the ",(0,s.kt)("em",{parentName:"p"},"factor"),", which now includes alternatives:"),(0,s.kt)("img",{src:"./imgs/lsbasi_part6_factor_diagram.png",alt:""}),(0,s.kt)("p",null,"The other syntax diagrams stay the same:"),(0,s.kt)("img",{src:"./imgs/lsbasi_part6_expr_term_diagram.png",alt:""}),(0,s.kt)("p",null,"Let's decompose the expression ",(0,s.kt)("inlineCode",{parentName:"p"},"2 * (7 + 3)")," according to the grammar and see how it looks:"),(0,s.kt)("img",{src:"./imgs/lsbasi_part6_decomposition.png",alt:""}),(0,s.kt)("p",null,"Here is the code with two main changes:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"Lexer")," has been modified to return two more tokens: ",(0,s.kt)("em",{parentName:"li"},"LPAREN")," for a left parenthesis and ",(0,s.kt)("em",{parentName:"li"},"RPAREN")," for a right parenthesis."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"Interpreter\u2018s factor")," method has been slightly updated to parse parenthesized expressions in addition to integers.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Token types\n#\n# EOF (end-of-file) token is used to indicate that\n# there is no more input left for lexical analysis\nINTEGER, PLUS, MINUS, MUL, DIV, LPAREN, RPAREN, EOF = (\n    'INTEGER', 'PLUS', 'MINUS', 'MUL', 'DIV', '(', ')', 'EOF'\n)\n\n\nclass Token(object):\n    def __init__(self, type, value):\n        self.type = type\n        self.value = value\n\n    def __str__(self):\n        \"\"\"String representation of the class instance.\n\n        Examples:\n            Token(INTEGER, 3)\n            Token(PLUS, '+')\n            Token(MUL, '*')\n        \"\"\"\n        return 'Token({type}, {value})'.format(\n            type=self.type,\n            value=repr(self.value)\n        )\n\n    def __repr__(self):\n        return self.__str__()\n\n\nclass Lexer(object):\n    def __init__(self, text):\n        # client string input, e.g. \"4 + 2 * 3 - 6 / 2\"\n        self.text = text\n        # self.pos is an index into self.text\n        self.pos = 0\n        self.current_char = self.text[self.pos]\n\n    def error(self):\n        raise Exception('Invalid character')\n\n    def advance(self):\n        \"\"\"Advance the `pos` pointer and set the `current_char` variable.\"\"\"\n        self.pos += 1\n        if self.pos > len(self.text) - 1:\n            self.current_char = None  # Indicates end of input\n        else:\n            self.current_char = self.text[self.pos]\n\n    def skip_whitespace(self):\n        while self.current_char is not None and self.current_char.isspace():\n            self.advance()\n\n    def integer(self):\n        \"\"\"Return a (multidigit) integer consumed from the input.\"\"\"\n        result = ''\n        while self.current_char is not None and self.current_char.isdigit():\n            result += self.current_char\n            self.advance()\n        return int(result)\n\n    def get_next_token(self):\n        \"\"\"Lexical analyzer (also known as scanner or tokenizer)\n\n        This method is responsible for breaking a sentence\n        apart into tokens. One token at a time.\n        \"\"\"\n        while self.current_char is not None:\n\n            if self.current_char.isspace():\n                self.skip_whitespace()\n                continue\n\n            if self.current_char.isdigit():\n                return Token(INTEGER, self.integer())\n\n            if self.current_char == '+':\n                self.advance()\n                return Token(PLUS, '+')\n\n            if self.current_char == '-':\n                self.advance()\n                return Token(MINUS, '-')\n\n            if self.current_char == '*':\n                self.advance()\n                return Token(MUL, '*')\n\n            if self.current_char == '/':\n                self.advance()\n                return Token(DIV, '/')\n\n            if self.current_char == '(':\n                self.advance()\n                return Token(LPAREN, '(')\n\n            if self.current_char == ')':\n                self.advance()\n                return Token(RPAREN, ')')\n\n            self.error()\n\n        return Token(EOF, None)\n\n\nclass Interpreter(object):\n    def __init__(self, lexer):\n        self.lexer = lexer\n        # set current token to the first token taken from the input\n        self.current_token = self.lexer.get_next_token()\n\n    def error(self):\n        raise Exception('Invalid syntax')\n\n    def eat(self, token_type):\n        # compare the current token type with the passed token\n        # type and if they match then \"eat\" the current token\n        # and assign the next token to the self.current_token,\n        # otherwise raise an exception.\n        if self.current_token.type == token_type:\n            self.current_token = self.lexer.get_next_token()\n        else:\n            self.error()\n\n    def factor(self):\n        \"\"\" factor: INTEGER | LPAREN expr RPAREN \"\"\"\n        token = self.current_token\n        if token.type == INTEGER:\n            self.eat(INTEGER)\n            return token.value\n        elif token.type == LPAREN:\n            self.eat(LPAREN)\n            result = self.expr()\n            self.eat(RPAREN)\n            return result\n\n    def term(self):\n        \"\"\" term : factor ((MUL | DIV ) factor)* \"\"\"\n        result = self.factor()\n        while self.current_token.type in (MUL, DIV):\n            token = self.current_token\n            if token.type == MUL:\n                self.eat(MUL)\n                result = result * self.factor()\n            elif token.type == DIV:\n                self.eat(DIV)\n                result = result / self.factor()\n\n        return result\n\n    def expr(self):\n        \"\"\"Arithmetic expression parser / interpreter.\n\n        calc> 7 + 3 * (10 / (12 / (3 + 1) - 1))\n        22\n\n        expr   : term ((PLUS | MINUS) term)*\n        term   : factor ((MUL | DIV) factor)*\n        factor : INTEGER | LPAREN expr RPAREN\n        \"\"\"\n\n        result = self.term()\n        while self.current_token.type in (PLUS, MINUS):\n            token = self.current_token\n            if token.type == PLUS:\n                self.eat(PLUS)\n                result = result + self.term()\n            elif token.type == MINUS:\n                self.eat(MINUS)\n                result = result - self.term()\n\n        return result\n\ndef main():\n    while True:\n        try:\n            text = input('calc>')\n        except EOFError:\n            break\n        if not text:\n            continue\n        lexer = Lexer(text)\n        interpreter = Interpreter(lexer)\n        result = interpreter.expr()\n        print(result)\n\nif __name__ == '__main__':\n    main()\n")),(0,s.kt)("p",null,"Next we'll deal with some recursive-descent parsers."))}f.isMDXComponent=!0}}]);