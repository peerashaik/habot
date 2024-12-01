import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ToggleNav() {
  return (
    <Navbar expand="lg" className="p-0">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="w-full h-full flex justify-center items-center align-middle gap-y-4 md:gap-x-5">
            <Nav.Link href="#link">Find Suppliers</Nav.Link>
            <NavDropdown title="Find Service Tags" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Buyer</NavDropdown.Item>
              <NavDropdown.Item href="/">Supplier</NavDropdown.Item>
            </NavDropdown>
            <a className="btn btn-outline font-bold">Login / Sign Up</a>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default ToggleNav;