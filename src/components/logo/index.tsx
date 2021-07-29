import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <img className="logo__img" src={logoImg} alt="Логотип АртСервис-Волга" />
      </Link>
    </div>
  );
};

export default Logo;
