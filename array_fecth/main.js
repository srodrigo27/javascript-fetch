let url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let autor = ["Maria", "Pedro", "Ana Souto", "Beto Silva"]
getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        //console.log(livro.imagem)
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens indisponivel" src="" alt="">
            <h2 class="livro__titulo"></h2>
            <p class="livro__descricao"></p>
            <p class="livro__preco"></p>
            <div class="tags">
                <span class="tag"></span>
            </div>
        </div>
        `
    })
}