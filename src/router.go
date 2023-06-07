package router

import (
	// Pacote de implementação de Cliente/Servidor HTTP.
	"net/http"

	//referêcia - importação do arquivo.
	login "localhost.com/login"
	account "localhost.com/account"
)
// Direciona a aplicação para o pacote da
// Funcionalidade conforme a requisição
func HandleRoutes() {
	//adiciona manipuladores no servidor
	//parâmetros: Rota e função a ser executada
	http.HandleFunc("/", login.Index)
	
	http.HandleFunc("/account", account.Index)

	http.HandleFunc("/termos", account.Termosindex)
}