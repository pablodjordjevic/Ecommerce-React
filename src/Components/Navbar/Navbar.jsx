import React from 'react';
import './Navbar.css';

const  Navbarx = () => {
  return (
<div className="Navbar">
      
      <div className="LadoIzquierdo">
        <div className="Links">
          <a href="/">Home</a>
          <a href="/Products">Productos</a>
        </div>
      </div>
      
      <div className="LadoDerecho">
        <input type="text" placeholder="Encuentra aqui..."/>
        <button className="BotonBuscador">Buscar</button>
      </div>
</div>
        )
}
export default Navbarx;
