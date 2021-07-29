import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../../contains/path';

const Nav = (): JSX.Element => {
  return (
    <nav>
      <Link to={Path.main}>Главная</Link>
      <Link to={Path.about}>Об издательстве</Link>
      <Link to={Path.works}>Наши работы</Link>
      <Link to={Path.services}>Наши услуги</Link>
      <Link to={Path.questions_answers}>Вопросы ответы</Link>
      <Link to={Path.contacts}>Контакты</Link>
    </nav>
  );
};

export default Nav;
