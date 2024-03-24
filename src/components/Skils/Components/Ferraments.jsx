import React from 'react'
import * as C from './Styles'

import { FaGitAlt } from "react-icons/fa6";
import { RiNpmjsFill } from "react-icons/ri";
import { SiWebpack } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const Ferraments = () => {
  return (

    <C.Container>
      <div className='card-container'>

        <div className='cards'>
          <FaGitAlt className='git' />
          <h2>GIT</h2>
        </div>

        <div className='cards'>
          <RiNpmjsFill className='npm' />
          <h2>NPM</h2>
        </div>

        <div className='cards'>
          <SiWebpack className='webpack' />
          <h2>WebPack</h2>
        </div>

        <div className='cards'>
          <DiVisualstudio className='vs' />
          <h2>Visual Studio</h2>
        </div>

      </div>
    </C.Container>
  )
}

export default Ferraments