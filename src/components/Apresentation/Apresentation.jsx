import React from 'react';
import * as C from './Styles';
import { useState } from 'react';

import Me from './../../assets/Apresentation-images/me.webp';
import CurriculoPDF from './../../assets/CV/cv.pdf'

const Apresentation = () => {

  const handleDownloadCV = () => {

      const link = document.createElement('a');
      link.href = CurriculoPDF; 
      link.download = 'curriculo.pdf'; 
      document.body.appendChild(link);
      link.click(); 
      document.body.removeChild(link);
  };
  const [theme, setTheme] = useState('light');

  return (
    <C.Container>
      <div className='left-side'>
        <div className='line'></div>
        <span className='hello-span'>Olá</span>
        <h1 className='name-span'>Me chamo Matheus</h1>
        <h2 className='seniority'> Desenvolvedor Front-End </h2>

        <div className='button-container'>
          <a href='#contato'>
            <button className='hire-button'>CONTRATAR</button>
          </a>
          <button className='CV-button' onClick={handleDownloadCV}>OBTER CURRÍCULO</button>
        </div>
      </div>

      <div className='right-side'>
        <img src={Me} alt="Minha foto" />
      </div>
    </C.Container>
  );
};

export default Apresentation;
