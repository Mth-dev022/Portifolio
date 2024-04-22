import React from 'react'

import * as C from './Styles'

import Icon01 from './../../../assets/Skils-images/icon01.webp'
import Icon02 from './../../../assets/Skils-images/icon02.webp'
import Icon03 from './../../../assets/Skils-images/icon03.webp'
import Icon04 from './../../../assets/Skils-images/icon04.webp'

import { useTranslation } from 'react-i18next';

const Habilidades = () => {

    const {t} = useTranslation()

    return (
        <C.Container>
            <div className='card-container'>

                <div className='cards'>
                    <img src={Icon01} />
                    <h2>Back-End</h2>
                    <p className='card-text'>
                        "Stack" {t("of technologies that I master")}:</p>
                    <p className='card-text'>
                    NodeJS
                    - Docker
                    </p>
                </div>

                <div className='cards'>
                    <img src={Icon02} />
                    <h2>{t("LIBRARIES")}</h2>
                    <p className='card-text'>
                       {t("Libraries that I have experience working with:")} </p>
                    <p className='card-text'>
                        Express
                        - Json-Web-Token
                        - Cookie-Parser
                        - BcryptJS
                    </p>
                </div>
                <div className='cards'>
                    <img src={Icon04} />
                    <h2>{t("DATABASES")}</h2>
                    <p className='card-text'>
                        {t("Knowledge to manage:")} </p>
                    <p className='card-text'>
                          MySQL
                        - MongoDB </p>
                </div>
            </div>
        </C.Container>
    )
}

export default Habilidades