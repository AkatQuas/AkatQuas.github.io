/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

const codeGenerator = node => {
    switch (node.type) {

        // If we have a `Program` node. We will map through each node in the `body`
        // and run them through the code generator and join them with a newline.
        case 'Program':
            return node.body.map(codeGenerator).join('\n');

        // For `ExpressionStatement` we'll call the code generator on the nested
        // expression and we'll add a semicolon...
        case 'ExpressionStatement':
            return (
                codeGenerator(node.expression) + ';'
            );

        // For `CallExpression` we will print the `callee`, add an open
        // parenthesis, we'll map through each node in the `arguments` array and run
        // them through the code generator, joining them with a comma, and then
        // we'll add a closing parenthesis.
        case 'CallExpression':
            return (
                codeGenerator(node.callee)+'('+
                node.arguments.map(codeGenerator).join(',') + ')'
            );
        
        case 'Identifier':
            return node.name

        case 'NumberLiteral':
            return node.value;
        
        case 'StringLiteral':
            return '"' + node.value + '"';
        
        default:
            throw new TypeError(node.type);
    }
}

module.exports = codeGenerator;