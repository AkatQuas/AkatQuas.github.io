const tokenizer = require('./tokenizer');
const parser = require('./parser');

const transformer = require('./transformer');
const codeGenerator = require('./generator');

const compiler = require('./compiler');

const input = '(add 2 (substract 4 2))';
const output = 'add(2, substract(4, 2))';

const tokens = [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'subtract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: ')' }
];

const ast = {
    type: 'Program',
    body: [{
        type: 'CallExpression',
        name: 'add',
        params: [{
            type: 'NumberLiteral',
            value: '2'
        }, {
            type: 'CallExpression',
            name: 'subtract',
            params: [{
                type: 'NumberLiteral',
                value: '4'
            }, {
                type: 'NumberLiteral',
                value: '2'
            }]
        }]
    }]
};

const newAst = {
    type: 'Program',
    body: [{
        type: 'ExpressionStatement',
        expression: {
            type: 'CallExpression',
            callee: {
                type: 'Identifier',
                name: 'add'
            },
            arguments: [{
                type: 'NumberLiteral',
                value: '2'
            }, {
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'subtract'
                },
                arguments: [{
                    type: 'NumberLiteral',
                    value: '4'
                }, {
                    type: 'NumberLiteral',
                    value: '2'
                }]
            }]
        }
    }]
};

const logger_assert = _ => {
    const logger = (str = 'end') => console.log(`-----${str}-----`)

    logger('tokenizer input')
    const tokenizer_token = tokenizer(input)
    console.log(tokenizer_token);
    logger('tobe')
    console.log(tokens)
    logger();

    logger('parser toknens')
    const parser_ast = parser(tokenizer_token)
    console.log(JSON.stringify(parser_ast));
    logger('tobe')
    console.log(JSON.stringify(ast));
    logger();

    logger('transformer ast')
    const transformer_newAst = transformer(parser_ast)
    console.log(JSON.stringify(transformer_newAst));
    logger('tobe')
    console.log(JSON.stringify(newAst));
    logger();

    logger('codeGenerator output')
    const code_output = codeGenerator(transformer_newAst);
    console.log(code_output)
    logger('tobe')
    console.log(output)
    logger();

    logger('compiler output')
    const compiler_output = compiler(input);
    console.log(compiler_output)
    logger('tobe')
    console.log(output)
    logger();
}

logger_assert();
