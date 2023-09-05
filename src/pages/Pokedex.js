import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../components/api';

import '../styles/Stylepoke.css'

function Pokedex() {
  
  const [Pokemons, setPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loves, setLoves] = useState (0);
    
  const handleLoves = () => { 
      
  setLoves(loves +1);
  };
    
    useEffect(() => {
      const fetchPokemon = async () => {
        try {

         const url = "https://pokeapi.co/api/v2/pokemon?Limit=20"
         const fetchedPokemons = [];
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
          {isLoading ? (
          Pokemons.map((item) => {
              
    return (
      <div className='Card' key={item}>
      <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img className="img" src={item.image} ></img>
      <p className='name'>{item.name}</p>
      </div>
      <div className="flip-card-back">
      <p className='name'>{item.id}</p>
        <div>
          <button onClick={handleLoves}>{loves} {loves ===1? 'Love♥':'Loves♥'}</button>
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
