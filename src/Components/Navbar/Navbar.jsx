import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '../CartWidget/CartWidget'
import { Navbar,Container,Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoCrearte from '../../image/crearte-logo_logo.svg'
import CartWidget from '../CartWidget/CartWidget';


const  NavBar = () => {
  return (
 
<Navbar expand="lg">
  <Container>
    <Link to="/"><img src={LogoCrearte} className="imgNavbar" alt="CrearteLogo"/></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Products">Productos</Link>
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>
  </Container>
</Navbar>


        )
}
export default NavBar;
