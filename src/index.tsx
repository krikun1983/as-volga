import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import './assets/sass/app.scss';
import Main from './components/main';

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <Main />
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
