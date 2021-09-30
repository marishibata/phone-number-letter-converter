import React from 'react';
import {
  FC,
  useState,
} from 'react';
import './App.css';


import {
  InputField,
  Keyboard,
} from './components/';

const App: FC = () => {
  return (
    <div className="app">
      <div className="header-text">
        Phonewords Converter
      </div>
      <div className="app-container">
        app-container.css
        <InputField />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
