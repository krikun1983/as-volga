import React from 'react';
import Logo from '../logo';
import Nav from './nav';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container flex-space">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
