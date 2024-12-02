import React from 'react'
import Footer from './Footer';
import { NavDropdown,Nav,Container,Navbar } from 'react-bootstrap';
export default function Navbar1() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">Whatsapp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
        </Nav>
        <NavDropdown  title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item href="/users/student">Student</NavDropdown.Item>
              <NavDropdown.Item href="/users/faculty">
                Facalty
              </NavDropdown.Item>
        </NavDropdown>      

        </Container>
      </Navbar>


        
        <Footer/>


                                     
                                       
                                    
                    
              
      


    </div>
  )
}
