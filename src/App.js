import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Content from './component/content/content';
import Dialogs from './component/dialog/dialogs';
import Header from './component/header/header';
import Instruction from './component/Instruction/Instruction';
import Sitebar from './component/sitebar/sitebar';

const App = (props) => {
  
  return (
    <div className="app_wrapper">
      <Header />
      <Sitebar />
      <div className="app-wrapper-container">
          <Route path ='/Instruction' render={ () => <Instruction />} />
          <Route path ='/Content' render={ () => <Content />} />
          <Route path ='/dialogs' render={ () => <Dialogs 
                                                        Dialogs={props.state.Dialogs} 
                                                        Messages={props.state.Messages} 
                                                        addMessage={props.addMessage} 
                                                        newMessageText={props.state.newMessageText}
                                                        updateNewMessageText ={props.updateNewMessageText}/> } />
      </div>
    </div>
  );
}

export default App;
