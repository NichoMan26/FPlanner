import React from 'react';
import cls from './App.module.css';

import Header from '../Header/Header'
import Content from '../Content/Content';

function App() {
  return (
    <div className={cls.App}>
        <Header />
        <Content/>
    </div>
  );
}

export default App;
