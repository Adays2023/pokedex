import { json } from "react-router-dom";

export async function getPokemonList(url) {
  var pokemonData = [];
  var result = {};
  try {
    // Consumir el api con la url recibida
    const response = await fetch(url);
    // vamos a esperar la respuesta y formatearla a json
    const data = await response.json();
    if (data.results && data.results.length) {
      // iterar cata pokemon
      for (const pokemon of data.results) {
        const url = pokemon.url;
        const detailPokemon = await getPokemonDetailByUrl(url);
        //push al arrelo de pokemons
        pokemonData.push(detailPokemon);
      }
     }
    result = {
      count: data.count,
      next: data.next,
      previous: data.previous,
      array: pokemonData,
    };
  } catch (error) {
    console.error(" Error capturando la Pokemon data", error);
    return null;
  }
  return result;
}

async function getPokemonDetailByUrl(url) {
  try {
    // obtener el detalle de cada pokemon
    const response = await fetch(url);
    const data = await response.json();
    const id = data.id;
    return {
      id,
      name: data.name,
      image: data.sprites.other["official-artwork"]["front_default"],
      height: data.height,
      type: data.types.map((item) => item.type.name + " "),
    };
  } catch (error) {
    console.error(" Error capturando el detalle", error);
    throw error;
  }
}

export const buscarPoke = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return await response.json();
};

export async function addPokemon(id){

    ///fovorites-poke
    const response= await fetch(`https://64ee640c219b3e2873c32ef7.mockapi.io/favorites/favorites`,
    {
        method:"POST", //envia dato
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({idPokemon:id})
    }).then((res)=>{
        if (res.ok){
            console.log('datos guardados');
        }
        else {
            throw `Error`;
        }
    });
}
export async function getPokemonfavorite() {
    
    // var pokemonFavoritesData = [];

    const response= await fetch(`https://64ee640c219b3e2873c32ef7.mockapi.io/favorites/favorites`)
    const data = await response.json();
   
    //pokemonFavoritesData.push(data);
    console.log("LOG",data)
    return data;

}
