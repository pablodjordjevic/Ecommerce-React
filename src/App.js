
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Switch>
        <Route exact path="/" component={Home}/>
       </Switch>
    </BrowserRouter>
    
  );
}
export default App;
