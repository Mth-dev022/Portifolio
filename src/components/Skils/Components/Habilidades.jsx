import React from 'react'

import * as C from './Styles'

import Icon01 from './../../../assets/Skils-images/icon01.webp'
import Icon02 from './../../../assets/Skils-images/icon02.webp'
import Icon03 from './../../../assets/Skils-images/icon03.webp'
import Icon04 from './../../../assets/Skils-images/icon04.webp'

const Habilidades = () => {

    return (
        <C.Container>
            <div className='card-container'>

                <div className='cards'>
                    <img src={Icon01} />
                    <h2>FRONT-END</h2>
                    <p className='card-text'>
                        "Stack" de tecnologias que domino:</p>
                    <p className='card-text'>
                        HTML5
                        - CSS3
                        - Java-Script
                    </p>
                </div>

                <div className='cards'>
                    <img src={Icon02} />
                    <h2>BIBLIOTECAS</h2>
                    <p className='card-text'>
                        Bibliotecas que tenho expêriencia em trabalhar: </p>
                    <p className='card-text'>
                        React.JS
                        - TypeScript
                        - SASS
                        - Bootstrap5
                        - Styled-components
                        - React-Router-DOM
                    </p>
                </div>

                <div className='cards'>
                    <img src={Icon03} />
                    <h2>API'S</h2>
                    <p className='card-text'>
                        Conhecimentos em trabalhar com API's No padrão REST.
                    </p>
                    <p className='card-text'>Ecossistema Java-Script: FetchAPI, contextAPI, DOM</p>
                </div>

                <div className='cards'>
                    <img src={Icon04} />
                    <h2>BANCO DE DADOS</h2>
                    <p className='card-text'>
                        Conhecimentos para administrar: </p>
                    <p className='card-text'>
                        MySQL
                        - MongoDB </p>
                </div>

            </div>
        </C.Container>
    )
}

export default Habilidades