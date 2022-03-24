package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

type Message struct {
	Id        int    `json: "id"`
	Timestamp int    `json: "timestamp"`
	Subject   string `json: "subject"`
	Detail    string `json: "detail"`
	Marked    bool   `json: "marked"`
}

func MessagesHandler(w http.ResponseWriter, r *http.Request) {

	sid := strings.TrimPrefix(r.URL.Path, "/messages")
	str := strings.Replace(sid, "/", "", -1)
	id, _ := strconv.Atoi(str)

	switch {
	case r.Method == "GET" && id > 0:
		messageForId(w, r, id)
	case r.Method == "GET":
		listMessages(w, r)
	default:
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "Erro: :(")
	}
}

func messageForId(w http.ResponseWriter, r *http.Request, id int) {
	db, err := sql.Open("mysql", "root:12345678@/civi")
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	stmt, _ := db.Prepare("update messages set marked = ? where id = ?")

	stmt.Exec(true, id)
	fmt.Println(id)
	json, _ := json.Marshal(`ok`)

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, string(json))
}

func listMessages(w http.ResponseWriter, r *http.Request) {
	db, err := sql.Open("mysql", "root:12345678@/civi")
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	rows, _ := db.Query("select id, subject, detail, timestamp, marked from messages")

	defer rows.Close()

	var messages []Message
	for rows.Next() {
		var message Message
		rows.Scan(&message.Id, &message.Subject, &message.Detail, &message.Timestamp, &message.Marked)

		messages = append(messages, message)
	}

	json, _ := json.Marshal(messages)

	fmt.Println(string(json))

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, string(json))

}
