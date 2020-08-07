import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './component/content/content';
import Header from './component/header/header';
import Instruction from './component/Instruction/Instruction';
import Sitebar from './component/sitebar/sitebar';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <Header />
      <Sitebar />
      <div className="app-wrapper-container">
          <Route path ='/Instruction' component={Instruction} />
          <Route path ='/Content' component={Content} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
