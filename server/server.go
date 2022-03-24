package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/messages/", MessagesHandler)
	log.Println("Executando...")
	log.Fatal(http.ListenAndServe(":3001", nil))
}
