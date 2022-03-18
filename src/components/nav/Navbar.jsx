import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

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
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="./carrito" className="btn btn-outline-success">
                <img width={30} height={30} src='https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png' alt="esto es una imágen" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar