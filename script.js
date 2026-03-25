document.getElementById("btnCriar").addEventListener("click", function ()
{
    const titulo = document.getElementById("titulo").valure;
    const conteudo = document.getElementById("conteudo").valure;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            body: conteudo,
            userID: 1
        })
    })
    .then(res => res.json())
    .then(novoPost => {

        //Convertendo para padrão JSON:API
        const jsonApiFormat = {
            data: {
                type: "POSTS",
                id: novoPost.id,
                attributes: {
                    title: novoPost.title,
                    body: novoPost.body
            }
        }
    };
    
     document.getElementById("saida").textContent =
       JSON.stringify(jsonApiFormat, null, 4)
   })
});