
import './App.css';
import React from 'react';
import Navbarx from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <Navbarx/>
      
      <ItemListContainer
      name = 'Pablo'
      />
        
      

    </div>
  );
}
export default App;
