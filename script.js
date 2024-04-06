async function buscarPokemon(){

    let idPokemon = Number(document.getElementById("idPokemon").value)

    const url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon

    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    const divNomePersonagem = document.getElementById("nomePersonagem")
    divNomePersonagem.innerText = `#${pokemon.order} - ${pokemon.name}`

    const divImgPersonagem = document.getElementById("imgPersonagem")
    divImgPersonagem.src = pokemon.sprites.front_default

    adicionaTipos(pokemon)

}
async function adicionaTipos(pokemon){

    const divTipoUm = document.createElement('div')
    divTipoUm.classList.add('tipoUm')

    const divTipoDois = document.createElement('div')
    divTipoUm.classList.add('tipoDois')

    pokemon.types.forEach(element => {
        console.log(element.type.name)
        if(element.type.name = 'grass'){
            divTipoUm.innerText = (element.type.name)
            document.body.appendChild(divTipoUm)
            console.log("teste1")
        }
        else if(element.type.name = 'poison'){
            divTipoDois.innerText = (element.type.name)
            document.body.appendChild(divTipoDois)
            console.log("teste2")
        }
    });
    console.log(pokemon)

    // console.log(element.type.name)
}