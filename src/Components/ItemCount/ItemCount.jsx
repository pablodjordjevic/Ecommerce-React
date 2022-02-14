import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = () => {

  const [stock, setStock] = useState(1);


  const handleCounterUp = () => {
    setStock (stock +1);
  }

  const handleCounterDown = () => {
    setStock (stock -1);
  }

  return (
   
      <div className='count-style'>
        <button className='symbol-style' onClick={handleCounterDown}>-</button>
        <p>{stock}</p>
        <button className='symbol-style' onClick={handleCounterUp}>+</button>
      </div>
    
  );
}

export default ItemCount;