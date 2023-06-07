//nome do pacote
package main
//importação de bibliotecas.
import (
	//pacote que implementa Client/servidor HTTP.
	"net/http"

	router "localhost.com/router"
)
// Função inicial:
// - implementa o servidor
// - serve a pasta assets;
// - solicita direcionamento de requisições.
func main() {
	router.HandleRoutes()
	//permite o acesso a pasta assets.
	// atendendo as solicitações com o conteúdo do sistema de arquivos.
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))
	// executar e servir
	//parãmetros: Endereço/interface e manipulador.
	http.ListenAndServe(":8080", nil)

}