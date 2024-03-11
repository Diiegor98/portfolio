import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      sticky="top"
      data-bs-theme="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#top" className="text-brand">
          DIEGO RODRIGUEZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Nav.Link href="#top">Inicio</Nav.Link>
            <Nav.Link href="#about" className="text-nowrap">Sobre mí</Nav.Link>
            <Nav.Link href="#projects">Proyectos</Nav.Link>
            <Nav.Link href="#certificates">Certificados</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
