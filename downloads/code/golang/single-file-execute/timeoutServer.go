package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func myHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Serving: %s\n", r.URL.Path)
	fmt.Printf("Served: %s\n", r.Host)
}

func timeHandler(w http.ResponseWriter, r *http.Request) {
	t := time.Now().Format(time.RFC1123)
	Body := "The current time is:"
	fmt.Fprintf(w, "<h1 align=\"center\">%s</h1>", Body)
	fmt.Fprintf(w, "<h2 align=\"center\">%s</h2>\n", t)
	fmt.Fprintf(w, "Serving: %s\n", r.URL.Path)
	fmt.Printf("Served time for: %s\n", r.Host)
}

func main() {
	PORT := ":8001"
	arguments := os.Args
	if len(arguments) != 1 {
		PORT = ":" + arguments[1]
	}
	fmt.Println("Using port number:", PORT)

	m := http.NewServeMux()
	// Use an `http.Server` structure that supports two kinds of timeouts with its fields.
	// The first one is called `ReadTimeout`, and the second one is called `WriteTimeout`.
	// The value of the `ReadTimeout` field specifies the maximum duration for reading the entire request, including the body.
	// The value of the `WriteTimeout` field specifies the maximum duration before timing out writes of the response.
	srv := &http.Server{
		Addr:         PORT,
		Handler:      m,
		ReadTimeout:  3 * time.Second,
		WriteTimeout: 3 * time.Second,
	}

	m.HandleFunc("/time", timeHandler)
	m.HandleFunc("/", myHandler)

	err := srv.ListenAndServe()
	if err != nil {
		fmt.Println(err)
		return
	}
}
