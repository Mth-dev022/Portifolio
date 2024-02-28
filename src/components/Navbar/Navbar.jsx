import React, { useState } from 'react';
import * as C from './Styles';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <C.Container>
      <div>
        <a style={{textDecoration:'none'}} href='#'>
          <h1 className='logo'>PORTIFOLIO</h1>
        </a>
      </div>
      <div>
        <ul className='list'>
          <li onClick={() => handleItemClick('home')}>
            <a className={`list-items ${selectedItem === 'home' ? 'selected' : ''}`} href='#'>Home</a>
          </li>
          <li onClick={() => handleItemClick('sobre')}>
            <a className={`list-items ${selectedItem === 'sobre' ? 'selected' : ''}`} href='#sobre'>Sobre</a>
          </li>
          <li onClick={() => handleItemClick('habilidades')}>
            <a className={`list-items ${selectedItem === 'habilidades' ? 'selected' : ''}`} href='#habilidades'>Habilidades</a>
          </li>
          <li onClick={() => handleItemClick('projetos')}>
            <a className={`list-items ${selectedItem === 'projetos' ? 'selected' : ''}`} href='#projetos'>Projetos</a>
          </li>
          <li onClick={() => handleItemClick('contato')}>
            <a className={`list-items ${selectedItem === 'contato' ? 'selected' : ''}`} href='#contato'>Contato</a>
          </li>
        </ul>
      </div>
    </C.Container>
  );
};

export default Navbar;
