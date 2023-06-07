var form = document.getElementsByTagName('form')[0];
        // Quando ocorrer o evento submit (envio)
        // Execute a função getData
        form.addEventListener("submit", getData);

        // Define a solicitação e envia os dados ao servidor.
        function sendData(method, uri, header, data, serverReponse) {
            // XMLHttpRequest() - transfere dados entre o cliente e
            // servidor em segundo plano.
            let httpRequest = new XMLHttpRequest();

            // Iniciar a solicitação.
            // parâmetros - tipo de solicitação, local para envio (URl).
            httpRequest.open(method, uri); 

            // X-Content-Type-Options - Marcador usado pelo servidor para indicar que o
            //                          tipo de midia enviado pelo cabeçario não deve 
            //                          ser alterados.

            // multipart/form-data - tipo a qual o conteudo será enviado.

            httpRequest.setRequestHeader("X-Content-Type-Opitions", header)

            // send - envia os dados ao servidor.
            httpRequest.send(data);

            // onreadystatechange - Define uma função a ser chamada quando a
            //                      propriedade readystate mudar
            httpRequest.onreadystatechange = serverResponse;
        }

        function getData(event) {
            // Não permite a execurção padrão do botão do formulário.
            event.preventDefault();

            // data - Objeto que armazena os dados fonercidos no formulario

            let data = {
                name: form.name.value,
                lastname: form.lastname.value,
                email: form.email.value,
                password: form.password.value,
                confirm: form.confirmar.value,
                accept: form.accept.checked
            };

                // converte o objeto em JSON.
            let json = JSON.stringify(data);

            // Cria o cabeçário padrão.
            // pode-se definir um objeto com outros parâmetros.
            let header = new Headers({
                "X-Content-type-options": "application/json",
            });

            // Cria a solicitação.
            // Parâmetros: URI, objeto com cabeçário e dados.
            fetch("./registerjson", {

                // Cria cabeçário padrão.
                headers: new Headers({"X-Content-type-Opitions": "application/json",}),
                method: "POST",
                body: JSON.stringify(data),
            })
            .then((response) => {
                // this.status - Apresenta o status do retorno.
                // Ex: 200, 201, 404 ...
                const responseStatus = {
                    // () => {} - Arrow functions.
                    200:() => { alert("Dados enviados com sucesso!")},
                    400:() => { alert("Este cadastro já Existe.")},
                    404:() => { alert("Tente realizar o cadastro mais terde.")}
                }
                // verifica se o status esperado existe no objeto responseStatus
                if(responseStatus[response.status]) {
                    let responseUser = responseStatus[response.status];
                    responseUser();
                }else {
                    alert("Realize o cadastro novamente.")
                }
            });

        }