import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import '../styles/Styleabout.css';

function About() {
  return (

    <div className='contenedor2'>
        
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="header1"
        >
          <Typography>
            <h2 className='T1'>Pokémon:</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className='P1'>El mundo Pokémon conecta personas alrededor del globo, y lo disfrutan por igual todos los Entrenadores,
          tanto niños como adultos. Estas increíbles criaturas han traspasado fronteras físicas y lingüísticas 
          para llegar a los corazones de millones de personas durante más de 25 años, 
          El fenómeno Pokémon comenzó en Japón en 1996 y en la actualidad es una de las marcas 
          de entretenimiento más populares entre los niños de todo el mundo.
          uniéndolas a través de la alegría del juego y del descubrimiento.</p>
          <img className='I1'src='https://i.pinimg.com/originals/1f/0b/85/1f0b85bb750807778b1fe2444527fbd2.gif'></img>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="header2"
        >
          <Typography>
            <h2 className='T1'>Concepto:</h2>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className='P1'>Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. 
          Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, 
          entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. 
          El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional.</p>
          <img className='I2'src='https://cdn.staticneo.com/mg/2016/10/9bb7fd09b188a74c6d7865c23d24dcferrgrb_display.gif'></img>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="header3"
        >
         <Typography>
            <h2 className='T1'>Tipos de Pokémon:</h2>
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p className='P1'>Existen 18 tipos en los que se organiza a los pokémon. Los tipos acero y siniestro fueron agregados en el año 2000, en los juegos Gold, Silver y Crystal y el tipo hada fue agregado el 2013 en los juegos Pokémon X e Y. 
          Los pokémon pueden aprender ataques distintos a los de su tipo. 
          Por ejemplo, Kabutops (Agua/Roca) puede aprender el movimiento Pokémon Giga drenado que es de tipo planta.
          Cada pokémon tiene una cantidad determinada de movimientos o ataques que puede aprender. 
          Estos se pueden clasificar por su tipo o elemento (por ejemplo, el ataque trueno es un ataque tipo eléctrico).</p>
          <img className='I3'src='https://media.tenor.com/mjcU5gTYAMAAAAAC/pokemon-bulbasaur.gif'></img>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default About;