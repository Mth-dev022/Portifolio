import { useState, useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Apresentation from './components/Apresentation/Apresentation'
import Introduction from './components/Introduction/Introduction'
import Skils from './components/Skils/Skils'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import { DarkModeContext } from './context/darkModeContext'
import './style/dark.scss'

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <Apresentation />
      <Introduction />
      <Skils />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
