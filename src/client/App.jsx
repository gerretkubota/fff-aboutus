import React from 'react';

import Title from './components/Title.jsx';
import AboutUsContainer from './containers/AboutUsContainer.jsx';

import './public/styles/main.css';

const App = () => (
  <div className="app">
    <Title />
    <AboutUsContainer />
  </div>
);

export default App;
