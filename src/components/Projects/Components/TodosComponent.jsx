import React, { useState } from 'react'
import * as C from './../Styles'

import Tronmart from './../../../assets/Gallery-images/tronmart.png'
import Dashboard from './../../../assets/Gallery-images/dashboard.png'
import Quiz from './../../../assets/Gallery-images/quiz.png'
import Blog from '../../../assets/Gallery-images/blog.png'
import Booking from '../../../assets/Gallery-images/booking.png'
import Job from '../../../assets/Gallery-images/jobAI.png'

import { HiPlus } from "react-icons/hi2";

import { useTranslation } from 'react-i18next'

const TodosComponent = () => {

  const { t } = useTranslation()

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
        <div className='img'>
          <img src={Booking} width={400} height={300} alt="Ecommerce" />
          {hoveredItems[1] && (
            <a href='https://github.com/Mth-dev022/Booking_Reservation'>
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
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
        <div className='img'>
          <img src={Blog} width={400} height={300} alt="Ecommerce" />
          {hoveredItems[1] && (
            <a href='https://github.com/Mth-dev022/Tech-Blog'>
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
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

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <div className='img'>
          <img src={Job} width={400} height={300} alt="Ecommerce" />
          {hoveredItems[2] && (
            <a href='https://job-ai-yf7m.vercel.app/'>
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
        <h1 className='title'>{t("JobAI platform")}</h1>
        <div className='stack-container'>
          <span className='stack'>ReactJS</span>
          <span className='stack'>NodeJS</span>
          <span className='stack'>Express</span>
          <span className='stack'>Json-Web-Token</span>
          <span className='stack'>Cookie-Parser</span>
          <span className='stack'>PostgreSQL</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("JobAI is an efficient job search platform. Users can create an account, log in and search for jobs by position and location. We offer an integrated resume generator. We are constantly improving to provide the best experience for our users.")}</p>
        </div>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      >
        <div className='img'>
          <img src={Tronmart} width={400} height={300} alt="Ecommerce" />
          {hoveredItems[0] && (
            <a href='https://github.com/Mth-dev022/Tronmart'>
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
        <h1 className='title'>E-commerce</h1>
        <div className='stack-container'>
          <span className='stack'>React.JS</span>
          <span className='stack'>Axios</span>
          <span className='stack'>Context API</span>
          <span className='stack'>React-toastfy</span>
          <span className='stack'>UUID Generator</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("Tronmart E-Commerce is an online shopping platform built with the React.js framework. Focused on practicality, it offers users a simple and direct shopping experience. They can browse different products and add them to their cart with ease, making the purchasing process intuitive and efficient.")}</p>
        </div>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <div className='img'>
          <img src={Dashboard} width={400} height={300} alt="Ecommerce" />
          {hoveredItems[1] && (
            <a href="https://github.com/Mth-dev022/Booking_Reservation">
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
        <h1 className='title'>Dashboard</h1>
        <div className='stack-container'>
          <span className='stack'>ReactJS</span>
          <span className='stack'>NodeJS</span>
          <span className='stack'>Axios</span>
          <span className='stack'>@mui/icons-material</span>
          <span className='stack'>@mui/x-data-grid</span>
          <span className='stack'>Recharts</span>
          <span className='stack'>React-circular-progressbar</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("The hotel booking app admin panel gives you full control over the system. Administrators can manage users, add and edit hotel and room information, and track reservations made by users. This tool simplifies and speeds up application management, ensuring efficient and personalized operation.")}</p>
        </div>
      </div>

      <div
        className='card'
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <div className='img'>
          <img src={Quiz} width={400} height={300} alt="Quiz" />
          {hoveredItems[2] && (
            <a href='https://rocket-x-orpin.vercel.app/'>
              <div className="overlay">
                <HiPlus className="icon" />
              </div>
            </a>
          )}
        </div>
        <h1 className='title'>{t("Rocket-x Quiz")}</h1>
        <div className='stack-container'>
          <span className='stack'>ReactJS</span>
          <span className='stack'>Typescript</span>
          <span className='stack'>Redux Toolkit</span>
          <span className='stack'>NodeJS</span>
          <span className='stack'>Docker</span>
          <span className='stack'>Jest</span>
          <span className='stack'>Supertest</span>
          <span className='stack'>Cypress</span>
          <span className='stack'>MongoDB</span>
          <span className='stack'>CI/CD</span>
        </div>
        <div className='description-area'>
          <p className='description'>{t("Rocket-x is an interactive quiz platform, aimed specifically at developers, designed to offer a fun and educational experience by testing and improving knowledge in specific technologies. Developed with a full-stack architecture, it integrates the front-end with a Docker container built for the back-end.")}</p>
        </div>
      </div>

    </C.Gallery>
  )
}

export default TodosComponent
