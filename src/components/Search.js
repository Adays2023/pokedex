import React from "react";


function Buscar () {

    const Search = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonName, setPokemonName] = useState("");
  
    const handleSearch = async (e) => {
        e.preventDefault();
        const data = await fetchPokemonData(pokemonName);
        setPokemonData(data);
    };
  
    const handleInputChange = (e) =>
    setPokemonName(e.target.value.toLowerCase().trim());
  
    return (
        <div>
        <h1>Pokemon Info</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={pokemonName}
            onChange={handleInputChange}
            placeholder="Ingrese un nombre"
            />
          <button type="submit">Buscar</button>
        </form>
  
        {pokemonData ? (
          <Card
          name={pokemonData.name}
          image={pokemonData.sprites.front_default}
          height={pokemonData.height / 10} //divide /10 para obtener metros
          weight={pokemonData.weight / 10} //divide /10 para obtener kg
          type={pokemonData.types[0].type.name}
          />
          ) : (
              <h2>No Pokemon data to show</h2>
              )}
      </div>
    );
};

}
  export default Search;