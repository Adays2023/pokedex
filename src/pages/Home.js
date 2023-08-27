import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/Stylehome.css';
// import required module
import { Pagination } from 'swiper/modules';
import Header from '../components/Header';

    function Home(){
        return(
          <div>
              <Header></Header>
              <h3 className='titulo'>Aplicaciones móviles Pokémon</h3>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <div className="contenedor2">

        <SwiperSlide>
         <img className='Go' src='https://assets.pokemon.com/assets/cms2-es-xl/img/video-games/video-games/pokemon_go/pokemon-go-169.jpg'></img>
         <a id='poke' href="https://www.pokemon.com/el/app/pokemon-go/" target="_blank">Pokémon Go</a>
        </SwiperSlide>
        <SwiperSlide>
         <img className='poketv' src='https://assets.pokemon.com/assets/cms2-es-xl/img/misc/pokemon-tv-app/pokemon-tv-app-169.png'></img>
         <a id='poke' href="https://www.pokemon.com/el/app/tv-pokemon/" target="_blank">Pokémon TV</a>
        </SwiperSlide>
        <SwiperSlide>
         <img className='pokerush'src='https://assets.pokemon.com/assets/cms2-es-xl/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg'></img>
         <a id='poke' href="https://www.pokemon.com/el/app/pokemon-rumble-rush/" target="_blank">Pokémon Rumble Rush</a>
        </SwiperSlide>
        <SwiperSlide>
         <img className='pokequest'src='https://assets.pokemon.com/assets/cms2-es-xl/img/video-games/video-games/pokemon_quest/pokemon-quest-169.jpg'></img>
         <a id='poke' href="https://www.pokemon.com/el/app/pokemon-quest/" target="_blank">Pokémon Quest</a>
        </SwiperSlide>

      </div>
        </Swiper>
            </div>
        )

    }




export default Home