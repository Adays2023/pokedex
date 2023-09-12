import React, { useEffect, useState } from "react";
import {
  addPokemon,
  getPokemonList,
  getPokemonfavorite,
} from "../components/api";
import Pagination from "../components/Paginacion";

import "../styles/Stylepoke.css";
import { Button } from "@mui/material";

const limit = 20;
const totalPokemons = 400;
function Pokedex() {
  const [Pokemons, setPokemons] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [PokeGet, setPokeGet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [page, setPage] = useState(0);

  function updatePage(e) {
    setPage(e.target.value);
    setUpdate(!update)
  }

  const handleFavorite = (id) => {
    if (PokeGet === true) {
      console.log("Ya Existe");
    } else {
      setPokeGet();
      console.log("Agregado");
    }
    addPokemon(id);
    setUpdate(!update)
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
          page * limit
        }`;
        const response = await getPokemonList(url);
        const data = response.array;
        //get favorites
        const dataFavorites = await getPokemonfavorite();
        console.log("Data favorites", dataFavorites.array);
        setFavorites(dataFavorites)
        //
        setPokemons(data);
        console.log(`data: ${data}`);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };

    fetchPokemon();

    //creacion del metodo para obtener todos los pokemones favoritos

    const getPokemonFavori = async () => {
      const poke = await getPokemonfavorite();
      const data = poke;
      setPokeGet(data);
    };
    getPokemonFavori();
  }, [update]);

  return (
    <div className="contenedor">
      <div className="input">
        <input
          className="input-style"
          type="search"
          placeholder="Busqueda Pokémon"
        ></input>
        <button className="busqueda">Busqueda</button>
      </div>

      {isLoading ? (
        Pokemons.map((item) => {
          return (
            <div className="Card" key={item.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="img" src={item.image}></img>
                    <h1 className="name">{item.name}</h1>
                    <p className={item.type[0]} id="type">
                      {item.type[0]}
                    </p>
                    <p className={item.type[1]} id="type">
                      {item.type[1]}
                    </p>
                  </div>
                  <div className="flip-card-back">
                    <p className="name">#{item.id}</p>
                    <div>
                      {Favorites.some(
                        (favorite) => favorite.idPokemon === item.id
                      ) ? (
                        <button>Eliminar</button>
                      ) : (
                        <button onClick={() => handleFavorite(item.id)}>
                          Añadir
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="loading">Esta Cargando...</h2>
      )}
      {/*pagination*/}
      <Pagination
        updatePage={updatePage}
        limit={limit}
        totalPokemons={totalPokemons}
      />
    </div>
  );
}

export default Pokedex;
