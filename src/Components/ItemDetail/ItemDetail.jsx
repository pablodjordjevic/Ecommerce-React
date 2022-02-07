import React, { Fragment } from "react";
import './Item.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Item = ({item}) => {

return (
<Fragment>
  <Col key={item.id} className="box" sm="12" md="6" lg="4">
      <Card >
        <Link className="nav-link" to={`/ItemDetailContainer/${item.id}`}>
          <Card.Img variant="top" src={item.image} />
        </Link>
        <Card.Body>
          <Card.Title className="card--tittle">
            {item.title}
          </Card.Title>
          <Card.Text className="card--description">
            {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
  </Col>
  </Fragment>
  )
};

export default Item;