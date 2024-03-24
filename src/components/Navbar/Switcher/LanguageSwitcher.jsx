import React, { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import './styles.scss';
import i18next from 'i18next';
import Br from '../../../assets/flags/br.png'
import Usa from '../../../assets/flags/usa.png'

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: Br
  },
  { 
    name: "English",
    value: "en",
    flag: Usa
  }
];

const LanguageSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dropdown">
      <div className="icones" onClick={toggleMenu}>
        <TbWorld className='world-icon' />
        <MdArrowDropDown className='arrow-icon'/>
      </div>
      {menuOpen && (
        <div className='container'> 
          {languageOptions.map((op, i) => ( 
            <ul className="menu" key={i}>
              <li onClick={() => { i18next.changeLanguage(op.value) }}>
                <span> 
                  <img width="20px" src={op.flag} /> 
                </span> 
                {op.name}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
