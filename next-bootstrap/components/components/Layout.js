import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container, Button, } from 'react-bootstrap'





const Layout = ({children}) => {
    return ( 

  <main>  
    <Navbar collapseOnSelect expand="lg" sticky="top" bg='white'>
        <Container>
        <Nav.Link classname=''><Image  src='/assets/logo.PNG'  width={135} height={33} layout='intrinsic'/> </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
            <Nav className="me-auto d-flex ">
              <Nav.Link  href="#quienes-somos">quienes somos</Nav.Link>
              <Nav.Link  href="#maquinarias">maquinarias</Nav.Link>
              <Nav.Link  href="#testimonios">testimonios</Nav.Link>
            </Nav>
            <Nav>
            <Button className='d-inline' variant="dark">contactanos</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
 

  {children}

  </main>
  );
}
export default Layout;
