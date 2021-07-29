import React from 'react';
import Logo from '../logo';
import Nav from './nav';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container flex-space">
        <Logo />
        <div className="header__links flex-column">
          <div className="header__top flex-space-end">
            <h1 className="header__heading">Издательство «АртСервис-Волга»</h1>
            <div className="header__contact">
              <div>Тел. 8(845-2)25-36-08</div>
              <div>E-mail: as-volga@mail.ru</div>
            </div>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
