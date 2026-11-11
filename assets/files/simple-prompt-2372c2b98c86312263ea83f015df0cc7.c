/* cc -std=c99 -Wall path/to/simple-prompt.c -o path/to/simple-prompt */
#include <stdio.h>

static char input[2048];

int main(int argc, char** argv) {
    while(1) {
        fputs("lispy> ", stdout);

        fgets(input, 2048, stdin);

        printf("Now you're a %s", input);
    }

    return 0;
}