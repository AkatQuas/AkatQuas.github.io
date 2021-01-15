/**
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

const WHITESPACE = /\s/;
const NUMBERS = /[0-9]/;
const LETTERS = /[a-z]/i;

// We start by accepting an input string of code, and we're gonna set up two
// things...
const tokenizer = input => {

    // A `current` variable for tracking our position in the code like a cursor.
    let current = 0;

    // And a `tokens` array for pushing our tokens to.
    let tokens = [];

    // We start by creating a `while` loop where we are setting up our `current`
    // variable to be incremented as much as we want `inside` the loop.
    //
    // We do this because we may want to increment `current` many times within a
    // single loop because our tokens can be any length.
    while(current < input.length) {
        
        // We're also going to store the `current` character in the `input`.
        let char = input[current];

        // checking the parenthesis, open or close
        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '('
            });

            current++;
            continue;
        }
        
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')'
            });

            current++;
            continue;
        }

        // Moving on, we're now going to check for whitespace. This is interesting
        // because we care that whitespace exists to separate characters, but it
        // isn't actually important for us to store as a token. We would only throw
        // it out later.
        //
        // So here we're just going to test for existence and if it does exist we're
        // going to just `continue` on.
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        // The next type of token is a number. This is different than what we have
        // seen before because a number could be any number of characters and we
        // want to capture the entire sequence of characters as one token.
        //
        //   (add 123 456)
        //        ^^^ ^^^
        //        Only two separate tokens
        //
        // So we start this off when we encounter the first number in a sequence.

        if (NUMBERS.test(char)) {
            let value = '';
            
            while(NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
             
            tokens.push({
                type: 'number',
                value
            });

            continue;
        }

        if (char === '"') {
            let value = '';
            char = input[++current];
            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            //skip the closing double quote
            tokens.push({ type: 'string', value});

            continue;
        }

        // The last type of token will be a `name` token. This is a sequence of
        // letters instead of numbers, that are the names of functions in our lisp
        // syntax.
        //
        //   (add 2 4)
        //    ^^^
        //    Name token

        if (LETTERS.test(char)) {
            let value = '';

            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'name' , value });

            continue;
        }

        throw new TypeError('Unkown Token:' + char);
    }

    return tokens;
}

module.exports = tokenizer;