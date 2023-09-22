import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavLink() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} style={{borderBottom:"1px solid black",position:"sticky",top:'0',zIndex:'2'}} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <a href="/">
              <img height={'60px'} width={'50px'} src='https://logos-download.com/wp-content/uploads/2021/01/Bigbasket_Logo.png'/>
            </a>
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
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/cart">ORDER NOW</Nav.Link>
                  
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