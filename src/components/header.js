// import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap"
import { Link } from "gatsby"
const Header = ({ logo }) => {
  const NavLink = [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/services",
      title: "Services",
    },
    {
      route: "/work",
      title: "Work",
    },
    {
      route: "/about",
      title: "About",
    },
    {
      route: "/log",
      title: "Blog",
    },
  ]
  return (
    <header className="header w-100">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Link to="/">
            <Navbar.Brand href="#home" className="py-0">
              <Image src={logo} alt="no logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="collapse-navbar-nav" />
          <Navbar.Collapse id="collapse-navbar-nav">
            <Nav className="ml-auto navbar">
              {NavLink.map((link, i) => {
                return (
                  <Nav.Link href={link.route} className="navbar__item" key={i}>
                    {link.title}
                  </Nav.Link>
                )
              })}
              <Nav.Link href="/contact" className="navbar__item ">
                <Button className="endeavour-button">Contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
export default Header
