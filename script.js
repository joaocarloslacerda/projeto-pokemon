async function buscarPokemon(){

    let idPokemon = Number(document.getElementById("idPokemon").value)

    const url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon

    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    const divNomePersonagem = document.getElementById("nomePersonagem")
    divNomePersonagem.innerText = pokemon.name

    const divImgPersonagem = document.getElementById("imgPersonagem")
    divImgPersonagem.src = pokemon.sprites.front_default

}