import React, {useState} from 'react'
import * as C from './../Styles'

import Tronmart from './../../../assets/Gallery-images/tronmart.png'
import LP from './../../../assets/Gallery-images/landing.png'
import RealState from './../../../assets/Gallery-images/realstate.png'

import { HiPlus } from "react-icons/hi2";

const RecentesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <C.Gallery>
       <div
        className='card'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={Tronmart} width={400} height={300} alt="Ecommerce" />
        {isHovered && (
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={RealState} width={400} height={300} alt="Ecommerce" />
        {isHovered && (
          <a href='https://realstate-livid.vercel.app/'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Corretor Imobiliário</h1>
        <h2 className='sub-title'>Landing Page</h2>
      </div>

      <div
        className='card'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={LP} width={400} height={300} alt="Ecommerce" />
        {isHovered && (
          <a href='https://webhost-lac.vercel.app/'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Hospedagem Web</h1>
        <h2 className='sub-title'>Landing Page</h2>
      </div>
    </C.Gallery>
  )
}

export default RecentesComponent