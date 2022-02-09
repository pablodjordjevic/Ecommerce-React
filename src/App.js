
import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import PagProductos from './pages/PagProductos';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={PagProductos}/>
        <Route exact path="/itemdetailcontainer/:id" component={ItemDetailContainer}/>
       </Switch>
    </BrowserRouter>
    
  );
}
export default App;
