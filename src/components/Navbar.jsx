import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container >
          <Navbar.Brand>
            <img src="./logo-pokemon.png" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" activeclassname="active">Home</Nav.Link>
              <Nav.Link href="/pokemon" activeclassname="active">Pokemon</Nav.Link>
              <Nav.Link href="/detalle" activeclassname="active">Detalle</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="./carrito" className="btn btn-outline-success">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar