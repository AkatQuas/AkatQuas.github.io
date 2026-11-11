/* cc -std=c99 -Wall path/to/parsing.c path/to/mpc.c -ledit -lm -o path/to/parsing */
#include <stdio.h>
#include <stdlib.h>
#include "mpc.h"

/* If we are compiling on Windows compile these functions*/
#ifdef _WIN32
#include <string.h>

static char buffer[2048];

/* Polyfill readline function*/
char* readline(char* prompt) {
    fputs(prompt, stdout);
    fgets(buffer, 2048, stdin);
    char* cpy = malloc(strlen(buffer) + 1);
    strcpy(cpy, buffer);
    cpy[strlen(cpy)-1] = '\0';
    return cpy;
}

/* Polyfill add_history function*/
void add_history(char* unused) {

}
#else
#include <editline/readline.h>
#endif

int main(int argc, char** argv) {
    /* Create some Parsers*/
    mpc_parser_t* Number = mpc_new("number");
    mpc_parser_t* Operator = mpc_new("operator");
    mpc_parser_t* Expr = mpc_new("expr");
    mpc_parser_t* Lispy = mpc_new("lispy");

    /* Define the following language */
    mpca_lang(MPCA_LANG_DEFAULT,
        " \
            number: /-?[0-9]+/; \
            operator: '+'| '-' | '*' | '/'; \
            expr: <number> | '(' <operator> <expr>+ ')';\
            lispy: /^/ <operator> <expr>+ /$/; \
        ",
     Number, Operator, Expr, Lispy);

    puts("Lispy Version 0.0.0.0.2");
    puts("Press Ctrl+c to Exit\n");

    while(1) {
        char* input = readline("lispy> ");

        add_history(input);

        /* Attempt to parse the user input */
        mpc_result_t r;
        if (mpc_parse("<stdin>", input, Lispy, &r)) {
            /* On success print and delete the AST*/
            mpc_ast_print(r.output);
            mpc_ast_delete(r.output);
        } else {
            mpc_err_print(r.error);
            mpc_err_delete(r.error);
        }

        free(input);
    }

    mpc_cleanup(4, Number, Operator, Expr, Lispy);
    return 0;
}