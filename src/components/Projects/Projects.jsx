import React, { useState, useEffect } from 'react';
import * as C from './Styles';

import TodosComponent from './Components/TodosComponent'
import RecentesComponent from '././Components/RecentesComponent'
import DesenvolvimentoComponent from './Components/DesenvolvimentoComponent'

import { useTranslation } from 'react-i18next';

const Projects = () => {
  const {t} = useTranslation()

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
      <h1 className='title'>{t("Project Gallery")}</h1>
      <p className='text'>{t("Welcome to my project gallery! Here, I share with you some of what I have created as a programmer.")}</p>

      <ul className='list'>
        <li className={selectedItem === 'Todos' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Todos')}>{t("ALL")}</li>
        <li className={selectedItem === 'Recentes' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Recentes')}>{t("RECENT")}</li>
        <li className={selectedItem === 'Em desenvolvimento' ? 'list-items selected' : 'list-items'} onClick={() => handleItemClick('Em desenvolvimento')}>{t("UNDER DEVELOPMENT")}</li>
      </ul>

      {renderProjects()}
    </C.Container>
  );
};

export default Projects;
