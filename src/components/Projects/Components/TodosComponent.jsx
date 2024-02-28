import React, { useState } from 'react'
import * as C from './../Styles'

import Tronmart from './../../../assets/Gallery-images/tronmart.png'
import Dashboard from './../../../assets/Gallery-images/dashboard.png'
import Game from './../../../assets/Gallery-images/game.png'
import Weather from './../../../assets/Gallery-images/weather.png'
import Generator from './../../../assets/Gallery-images/generator.png'
import Dicionary from './../../../assets/Gallery-images/dicionary.png'
import LP from './../../../assets/Gallery-images/landing.png'
import RealState from './../../../assets/Gallery-images/realstate.png'

import { HiPlus } from "react-icons/hi2";

const TodosComponent = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(8).fill(false));

  const handleMouseEnter = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = true;
    setHoveredItems(newHoveredItems);
  };

  const handleMouseLeave = (index) => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[index] = false;
    setHoveredItems(newHoveredItems);
  };

  return (
    <C.Gallery>
      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      >
        <img src={Tronmart} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[0] && (
          <a href='https://github.com/Mth-dev022/Tronmart'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>E-commerce</h1>
        <h2 className='sub-title'>Website</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <img src={Dashboard} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[1] && (
          <a href='https://github.com/Mth-dev022/Dashboard'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Dashboard</h1>
        <h2 className='sub-title'>Software</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <img src={Game} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[2] && (
          <a href='https://jogo-mata-mosquito-tan.vercel.app/'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Jogo "Mata Mosquito"</h1>
        <h2 className='sub-title'>Web Game</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave(3)}
      >
        <img src={Weather} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[3] && (
          <a href='https://github.com/Mth-dev022/Weather_app'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Aplicativo do tempo</h1>
        <h2 className='sub-title'>Software</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave(4)}
      >
        <img src={Generator} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[4] && (
          <a href='https://github.com/Mth-dev022/Unisplash_API'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Gerador de imagens</h1>
        <h2 className='sub-title'>Software</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={() => handleMouseLeave(5)}
      >
        <img src={Dicionary} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[5] && (
          <a href='https://github.com/Mth-dev022/Dicionary'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Dicionário</h1>
        <h2 className='sub-title'>Software</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={() => handleMouseLeave(6)}
      >
        <img src={LP} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[6] && (
          <a href='https://webhost-lac.vercel.app/'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Hospedagem Web</h1>
        <h2 className='sub-title'>Landing Page</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={() => handleMouseLeave(7)}
      >
        <img src={RealState} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[7] && (
          <a href='https://realstate-livid.vercel.app/'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Corretor Imobiliário</h1>
        <h2 className='sub-title'>Landing Page</h2>
      </div>

    </C.Gallery>
  )
}

export default TodosComponent