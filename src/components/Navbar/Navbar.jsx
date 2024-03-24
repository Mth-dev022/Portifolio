import React, { useState, useContext } from 'react';
import * as C from './Styles';
import { DarkModeContext } from "../../context/darkModeContext";
import { GoMoon } from "react-icons/go";
import { MdOutlineLightMode } from "react-icons/md";

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './Switcher/LanguageSwitcher';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const { dispatch } = useContext(DarkModeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMoonIcon, setShowMoonIcon] = useState(false); 

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    dispatch({ type: isDarkMode ? "LIGHT" : "DARK" });
  };

  const toggleMoonIcon = () => {
    setShowMoonIcon(!showMoonIcon); 
  };

  const handleCapsuleClick = () => {
    toggleTheme(); 
    toggleMoonIcon();
  };

  const { t, i18n } = useTranslation()

  return (
    <C.Container>
      <div>
        <a style={{ textDecoration: 'none' }} href='#'>
          <h1 className='logo'>PORTIFOLIO</h1>
        </a>
      </div>
      <div>
        <ul className='list'>
          <LanguageSwitcher />
          <li onClick={() => handleItemClick('home')}>
            <a className={`list-items ${selectedItem === 'home' ? 'selected' : ''}`} href='#'>Home</a>
          </li>
          <li onClick={() => handleItemClick('sobre')}>
            <a className={`list-items ${selectedItem === 'sobre' ? 'selected' : ''}`} href='#sobre'>{t("About")}</a>
          </li>
          <li onClick={() => handleItemClick('habilidades')}>
            <a className={`list-items ${selectedItem === 'habilidades' ? 'selected' : ''}`} href='#habilidades'>{t("Skills")}</a>
          </li>
          <li onClick={() => handleItemClick('projetos')}>
            <a className={`list-items ${selectedItem === 'projetos' ? 'selected' : ''}`} href='#projetos'>{t("Projects")}</a>
          </li>
          <li onClick={() => handleItemClick('contato')}>
            <a className={`list-items ${selectedItem === 'contato' ? 'selected' : ''}`} href='#contato'>{t("Contact")}</a>
          </li>

          <div className={`themeCapsule ${isDarkMode ? 'dark-theme' : ''}`} onClick={handleCapsuleClick}>
            <span className="ball">
              {showMoonIcon ? <GoMoon className='moon-icon' /> : <MdOutlineLightMode className='light-icon' />}
            </span>
          </div>
        </ul>
      </div>
    </C.Container>
  );
};

export default Navbar;
