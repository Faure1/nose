import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container, Button, Row} from 'react-bootstrap'








const Layout = ({children}) => {
    return ( 

<main>  
  <Navbar bg="dark" variant="dark">
    <Container >
        <Row >
        
  
          <Nav className="me-auto">
            <Nav.Link classname='col-1 col-lgl-2'> <Image  src='/assets/logo.PNG'  width={120} height={36} layout='intrinsic'/> </Nav.Link>
            <Nav >
              <Nav.Link  href="#quienes-somos">quienes somos</Nav.Link>
              <Nav.Link  href="#maquinarias">maquinarias</Nav.Link>
              <Nav.Link  href="#testimonios">testimonios</Nav.Link>
            </Nav>
            <Nav.Link classname='col-1 col-lgl-2' href="#contactame"><button>contactame</button></Nav.Link>
          </Nav>
        </Row>
    </Container>
  </Navbar>

 

      {children}





</main>

  );
}
 
export default Layout;