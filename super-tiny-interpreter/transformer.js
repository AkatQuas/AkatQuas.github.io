/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */


const traverser = (ast, vistor) => {

    function traverseNode(node, parent) {
        let methods = vistor[node.type];
        // If there is an `enter` method for this node type we'll call it with the
        // `node` and its `parent`.
        if (methods && methods.enter) {
            methods.enter(node, parent);
        }
        switch (node.type) {
            case 'Program':
                traverseArray(node.body, node);
                break;
            case 'CallExpression':
                traverseArray(node.params, node);
                break;
            case 'NumberLiteral':
            case 'StringLiteral':
                break;

            default:
                throw new TypeError(node.type);
        }
    }

    // a `traverseArray` function that will allow  us to iterate over an array and 
    // call the next function that we will define: `traverseNode`
    function traverseArray(array, parent) {
        array.forEach(child => {
            traverseNode(child, parent);
        });
    };

    traverseNode(ast, null);
}

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

const transformer = ast => {
    let newAst = {
        type: 'Program',
        body: []
    };

    // We're going to use a property named `context` on our parent nodes 
    // that we're going to push nodes to their parent's `context`.
    // Normally you would have a better abstraction than this, 
    // but for our purposes this keeps things simple.
    //
    // Just take note that the context is a reference *from* the old ast *to* the
    // new ast.

    ast._context = newAst.body;

    traverser(ast, {
        NumberLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: 'NumberLiteral',
                    value: node.value
                });
            },
        },

        StringLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: 'StringLiteral',
                    value: node.value
                });
            },
        },

        CallExpression: {
            enter(node, parent) {

                let expression = {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: node.name,
                    },
                    arguments: [],
                };
                node._context = expression.arguments;
                if (parent.type !== 'CallExpression') {
                    expression = {
                        type: 'ExpressionStatement',
                        expression: expression
                    };
                }
                parent._context.push(expression);
            },
        }
    });

    return newAst;
}

module.exports = transformer;