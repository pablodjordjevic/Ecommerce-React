import React, { Fragment } from "react";
import './ItemDetail.css'
import { Card, Col, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({title, image, description, id,price}) => {

return (
<Fragment>    
    <Col key={id} className="box" sm="12" md="6" lg="3">
      <Card>
        <Card.Img variant="top" src={image} /> 
          <Card.Body> 
            <Card.Title className="titleItemDetail">{title}</Card.Title>
            <Card.Text className="detalleItemDetail">
              {description}
            </Card.Text>
            <ItemCount />
            <p className="price">${price}</p>
            <Button className="buttonItemDetail" variant="primary">COMPRAR</Button>
          </Card.Body>
      </Card>
  </Col>
  </Fragment>
  )
};

export default ItemDetail;