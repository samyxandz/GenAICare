import React from 'react'
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import './Nav.css';
import logoo from '../../Assets/logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faSearch, faArrowLeft, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";




const Navbars = () => {
  return (
<Navbar  className="bg-body-tertiary">
<Container>
  <Navbar.Brand >

     <img src={logoo} alt ="" title="logoo"/>


  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="active" href="/Navbar">Home</Nav.Link>

  
      <NavDropdown title="Pages" id="basic-nav-dropdown">
        <NavDropdown.Item href="/blog">About Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
        <NavDropdown.Item href="/Faq">FAQ'S</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Service">Service</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Service Details
        </NavDropdown.Item>

      </NavDropdown>
      <NavDropdown title="Appointment" id="basic-nav-dropdown">
        <NavDropdown.Item href="/About">Action</NavDropdown.Item>

      </NavDropdown>
      <Nav.Link to ="/contact" href="/Contact">Contact Us</Nav.Link>
      <Nav.Link ><FontAwesomeIcon icon={faSearch} /> </Nav.Link>
      <Nav.Link>
        <FontAwesomeIcon icon={faPiggyBank} className="Phone"/> 
        </Nav.Link> 
      <Nav.Link >
         <button>Signin/Login <span> <FontAwesomeIcon icon ={faArrowLeft} /> </span></button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

export default Navbars;
