import React from 'react';
import cls from './App.module.css';


import Header from '../Header/Header'
import Content from '../Content/Content';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className={cls.App}>
        <Header />
        <Nav/>
        <Content/>
    </div>
  );
}

export default App;
