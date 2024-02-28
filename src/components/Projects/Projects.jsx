import React, { useState, useEffect } from 'react';
import * as C from './Styles';

import TodosComponent from './Components/TodosComponent'
import RecentesComponent from '././Components/RecentesComponent'
import DesenvolvimentoComponent from './Components/DesenvolvimentoComponent'

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState('Todos');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderProjects = () => {

    switch (selectedItem) {
      case 'Todos':
        return <TodosComponent />;
      case 'Populares':
        return <PopularesComponent />;
      case 'Recentes':
        return <RecentesComponent />;
      case 'Em desenvolvimento':
        return <DesenvolvimentoComponent />;

      default:
        return null;
    }
  };

  return (
    
    <C.Container className='reveal' id="projetos">
      <h1 className='title'>Galeria de Projetos</h1>
      <p className='text'>Bem-vindo à minha galeria de projetos! Aqui, compartilho com você um pouco do que tenho criado como programador.</p>

      <ul className='list'>
        <li className={selectedItem === 'Todos' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Todos')}>TODOS</li>
        <li className={selectedItem === 'Recentes' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Recentes')}>RECENTES</li>
        <li className={selectedItem === 'Em desenvolvimento' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Em desenvolvimento')}>EM DESENVOLVIMENTO</li>
      </ul>

      {renderProjects()}
    </C.Container>
  );
};

export default Projects;
