import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart, faUserAlt} from '@fortawesome/free-solid-svg-icons';



const CartWidget = () => {
    return (
    <div>
        <FontAwesomeIcon icon={faShoppingCart}/>
        <FontAwesomeIcon icon={faUserAlt}/>  
        <FontAwesomeIcon icon={faHeart}/>
    </div>
    )
}
export default CartWidget;