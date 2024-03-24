import React from 'react';
import * as C from './Styles';
import { useState } from 'react';

import Me from './../../assets/Apresentation-images/me.png';
import CurriculoPDF from './../../assets/CV/cv.pdf'

import { useTranslation } from 'react-i18next';

const Apresentation = () => {

  const {t} = useTranslation()

  const handleDownloadCV = () => {

      const link = document.createElement('a');
      link.href = CurriculoPDF; 
      link.download = 'curriculo.pdf'; 
      document.body.appendChild(link);
      link.click(); 
      document.body.removeChild(link);
  };
 
  return (
    <C.Container>
      <div className='left-side'>
        <div className='line'></div>
        <span className='hello-span'>{t("Hello")}</span>
        <h1 className='name-span'>{t("My name is Matheus")}</h1>
        <h2 className='seniority'> {t("Front-end Developer")} </h2>

        <div className='button-container'>
          <a href='#contato'>
            <button className='hire-button'>{t("Hire")}</button>
          </a>
          <button className='CV-button' onClick={handleDownloadCV}>{t("Get resume")}</button>
        </div>
      </div>

      <div className='right-side'>
        <img src={Me} alt="Minha foto" />
      </div>
    </C.Container>
  );
};

export default Apresentation;
