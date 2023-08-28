import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import '../styles/Headerstyle.css'
import 'swiper/css/pagination';
import Home from '../pages/Home';

function Header () {
    const [randomPokemons, setRandomPokemons] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        const fetchRandomPokemon = async () => {
        try {
            const getRandomPokemonId = () => Math.floor(Math.random() * 400) + 1; // funcion que trae aleatorios
            //[100, 4,30,25]
            const pokemonIds = Array.from({ length: 10 }, getRandomPokemonId); // Array .from(tamaÃ±, contenido o como llenar el contenido)

            const fetchedPokemons = [];

            for (const id of pokemonIds) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            fetchedPokemons.push(data);
            console.log(data);
            }

            setRandomPokemons(fetchedPokemons);
        } catch (error) {
            console.error("Error capturando Pokemon data", error);
        }
        setisLoading(true);
        };
        fetchRandomPokemon();
        
    },[]);

  return (
    
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
    <div className="contenedor">
        {isLoading ? (
            randomPokemons.map((item, index) => {
                return (
                    
                    <SwiperSlide>
                        <h3>Pokémon destacados</h3>
                      
                <div className='cardPokemon' key={item.index}>
                 <img
                  className="imgPokemones"
                  src={item.sprites.other["official-artwork"]["front_default"]}
                  />
                <p className='namePokemon'>{item.name}</p>
              </div>
        </SwiperSlide>
        );
      })
    ) : (
      <h2 className='loading'>Esta Cargando...</h2>
    )}
    </div>
  </Swiper>
  )
}

export default Header