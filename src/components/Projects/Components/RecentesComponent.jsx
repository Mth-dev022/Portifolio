import React, {useState} from 'react'
import * as C from './../Styles'

import Blog from './../../../assets/Gallery-images/blog.png'
import Booking from './../../../assets/Gallery-images/booking.png'

import { HiPlus } from "react-icons/hi2";

import {useTranslation} from 'react-i18next'

const RecentesComponent = () => {

  const {t} = useTranslation()

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
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <img src={Booking} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[1] && (
          <a href='https://github.com/Mth-dev022/Booking_Reservation'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Booking Reservation</h1>
        <div className='stack-container'>
          <span className='stack'>React.JS</span>
          <span className='stack'>Axios</span>
          <span className='stack'>Sass</span>
          <span className='stack'>NodeJS</span>
          <span className='stack'>Express</span>
          <span className='stack'>Json-web-token</span>
          <span className='stack'>Cookie-parser</span>
          <span className='stack'>MongoDB</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("The hotel booking app provides a simple and secure platform to find and book accommodation across multiple cities. With it, users can select their desired destination and stay dates, view a list of available hotels, and compare amenities and prices before making their choice.")}</p>
        </div>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <img src={Blog} width={400} height={300} alt="Ecommerce" />
        {hoveredItems[1] && (
          <a href='https://github.com/Mth-dev022/Tech-Blog'>
            <div className="overlay">
              <HiPlus className="icon" />
            </div>
          </a>
        )}
        <h1 className='title'>Tech Blog</h1>
        <div className='stack-container'>
          <span className='stack'>React.JS</span>
          <span className='stack'>Axios</span>
          <span className='stack'>NodeJS</span>
          <span className='stack'>Express</span>
          <span className='stack'>Json-web-token</span>
          <span className='stack'>Cookie-parser</span>
          <span className='stack'>MySQL</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("Full stack blog that combines React.js on the frontend and Node.js with MySQL on the backend. In the user authentication part, I integrated the functionality using JSON Web Tokens (JWT), with the JWT tokens stored in cookies for efficient management of user sessions. Additionally, the application enables users to create and edit blog posts, with posts being saved directly to the database, ensuring effective persistence of information.")}</p>
        </div>
      </div>

    </C.Gallery>
  )
}

export default RecentesComponent