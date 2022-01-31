
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <ItemListContainer
      name = 'Pablo'
      />
        
      

    </div>
  );
}
export default App;
