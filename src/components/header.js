// import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap"
import { Link } from "gatsby"
const Header = ({ logo }) => (
  <header className="header w-100 ">
    <Container>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home" className="py-0">
          <Image src={logo} alt="no logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapse-navbar-nav" />
        <Navbar.Collapse id="collapse-navbar-nav">
          <Nav className="ml-auto navbar">
            <Nav.Link href="/" className="navbar__item">
              Home
            </Nav.Link>
            <Nav.Link href="/services" className="navbar__item">
              Services
            </Nav.Link>
            <Nav.Link href="/work" className="navbar__item">
              Work
            </Nav.Link>
            <Nav.Link href="/about" className="navbar__item">
              About
            </Nav.Link>
            <Nav.Link href="/blog" className="navbar__item">
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className="navbar__item ">
              <Button className="endeavour-button">Contact</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)
export default Header
