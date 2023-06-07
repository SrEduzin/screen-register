package login

import (
	"net/http"
)
// envia como resposta a pagina de login.
func Index(w http.ResponseWriter, r *http.Request) {
	//servir um arquivo especifico.
	//parãmetros: Resposta , Requisição e local do arquivo.
	http.ServeFile(w, r, "./pages/login.html")
}