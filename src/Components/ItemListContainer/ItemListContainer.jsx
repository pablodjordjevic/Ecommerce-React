import React , {useState , useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {productList} from '../Utils/utils';
import {useParams} from 'react-router-dom';

function ItemListContainer () {
    const [product, setProduct] = useState ([]);
    const {id} = useParams();
    useEffect (() => {
        const getProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productList);
            }, 500);
        });

      getProducts.then((res) => {
        id
        ? setProduct(res.filter(item => item.category === id.id))
        : setProduct(res)
    })
    .catch((error) => {
        console.log(error);
    });
    },[id])

    return (
        <div className="itemlistcontainerContainer">
            <ItemList product={product}/>
        </div>
    );
}

export default ItemListContainer;