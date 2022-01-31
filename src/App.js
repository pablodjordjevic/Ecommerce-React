
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import CardProductos from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
    
      <ItemListContainer name = 'Pablo'/>
      
      <CardProductos/>

    </div>
  );
}
export default App;
