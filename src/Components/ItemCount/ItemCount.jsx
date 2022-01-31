import React, { useState } from 'react';

const ItemCount = () => {

  const [stock, setStock] = useState(1);


  const handleCounterUp = () => {
    setStock (stock +1);
  }

  const handleCounterDown = () => {
    setStock (stock -1);
  }

  return (
    <div className='itemCount'>
      <button onClick={handleCounterUp}>+</button>
      <button onClick={handleCounterDown}>-</button>
      <p>{stock}</p>
    </div>
  );
}

export default ItemCount;