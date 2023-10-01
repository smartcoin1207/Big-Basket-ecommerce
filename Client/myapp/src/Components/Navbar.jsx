import { Box } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavLink() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} style={{borderBottom:"1px solid black",position:"sticky",top:'0',zIndex:'2'}} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Link to="/">
              <img height={'60px'} width={'50px'} src='https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png'/>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Big Basket
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav style={{fontWeight:"bold"}} className="justify-content-end flex-grow-1 pe-3">
                <Box justifyContent={'space-between'}>
                  <Link style={{padding:'15px'}} to="/">HOME</Link>
                  <Link style={{padding:'15px'}} to="/cart">ORDER NOW</Link>
                  <Link style={{padding:'15px'}}  to ="/admin/signup"> ADMIN</Link>
                </Box>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavLink;