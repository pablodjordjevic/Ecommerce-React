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
    <div>
      <button onClick={handleCounterDown}>-</button>
      <button onClick={handleCounterUp}>+</button>
      <p>{stock}</p>
    </div>
  );
}

export default ItemCount;