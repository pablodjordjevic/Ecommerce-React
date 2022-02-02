import React from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({product}) => {
    return (
        <div className="itemlistContainer">
            {product && product.map((product) => (
                <Item key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ItemList;