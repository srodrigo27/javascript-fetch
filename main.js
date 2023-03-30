let livros = []
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros')
// console.log(elementoParaInserirLivros)

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
            <img class="livro__imagens indisponivel" src="${livro.imagem}" alt="">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__autor">${livro.autor}</p>
            <p class="livro__preco">${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}