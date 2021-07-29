import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
