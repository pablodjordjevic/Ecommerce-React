import { productList } from '../Utils/utils';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
  const [product, setProducts] = useState([]);
  const { id } = useParams();
      
  useEffect(() => {
      const getProducts = new Promise((resolve) => {
          setTimeout(() => {
              resolve(productList);
          }, 500);
      });

      getProducts.then((result) => {
          id 
          && setProducts(result.find((product) => product.id === id));
      })
  }, [id]);

  return <ItemDetail {...product}/>;

} 

export default ItemDetailContainer;