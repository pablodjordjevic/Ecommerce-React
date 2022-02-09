import * as React from 'react';
import { Fragment } from 'react';
import { Button,Card,Col } from 'react-bootstrap';
import './Item.css';

const Item = ({product}) =>  {
  return (
   
  <Fragment>    
    <Col key={product.id} className="box" sm="12" md="6" lg="3">
      <Card>
        <Card.Img variant="top" src={product.image} /> 
          <Card.Body> 
            <Card.Title className="titleItemDetail">{product.title}</Card.Title>
            <Card.Text className="detalleItemDetail">
              {product.description}
            </Card.Text>
            <Button className="buttonItemDetail" variant="primary">COMPRAR</Button>
          </Card.Body>
      </Card>
  </Col>
        
 
  </Fragment>
  );
}

export default Item;





