import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../components/api';
import Pagination from '../components/Paginacion';

import '../styles/Stylepoke.css'

function Pokedex() {
  
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [newFavorite, setNewFavorites] = useState (false);




  const handleFavorite = () => { 
      
  setNewFavorites(newFavorite = true);
  };
    
    useEffect(() => {
      const fetchPokemon = async () => {
        try {

         const url = "https://pokeapi.co/api/v2/pokemon?Limit=20"
         const response= await getPokemonList(url);
         const data=response.array
         
         setPokemons(data);

        } catch (error) {
          console.error("Error capturando Pokemon data", error);
        }
        setisLoading(true);
      };
      fetchPokemon();
      
    },[]);




 
    return (

      <div className="contenedor">
    <div className='input'>
      <input className='input-style' 
      type='search' 
      placeholder='Busqueda Pokémon'></input>
      <button className='busqueda'>Busqueda</button>   
    </div>

          {isLoading ? (
            Pokemons.map((item) => {
              
    return (
      <div className='Card' key={item}>
      <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img className="img" src={item.image} ></img>
      <h1 className='name'>{item.name}</h1>
      <h3 className='tipo'>{item.type}</h3>
      </div>
      <div className="flip-card-back">
      <p className='name'>#{item.id}</p>
        <div>
          <button onClick={handleFavorite}>{newFavorite} {newFavorite === true ? '⭐':`Añadir Favoritos`}</button>
         
        </div>
      </div>
    </div>
  </div>
</div>
  );
})
  ): 
  (
    <h2 className='loading'>Esta Cargando...</h2>
  )}
</div>

  )
}

export default Pokedex;

