import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Apresentation from './components/Apresentation/Apresentation'
import Introduction from './components/Introduction/Introduction'
import Skils from './components/Skils/Skils'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Navbar />
     <Apresentation />
     <Introduction />
     <Skils />
     <Projects />
     <Footer />
    </>
  )
}

export default App
