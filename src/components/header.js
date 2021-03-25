// import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
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
    route: "https://blog.qbatch.com",
    title: "Blog",
  },
  {
    route: "/contact",
    title: "contact",
  },
  {
    route: "/estimate",
    title: "estimate",
  },
]
const Header = props => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  return (
    <header className={`header w-100`}>
      <Container>
        <Navbar expand="lg">
          <Link to="/">
            <Navbar.Brand className={`py-0`}>
              <Image src={props.logo} alt="no logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="collapse-navbar-nav" />
          <Navbar.Collapse id={`collapse-navbar-nav`}>
            <Nav
              className={`ml-auto navbar`}
              activeKey={window.location.pathname}
            >
              {url.split("/")[3] === "estimate" ? (
                <Nav.Link href="/" className={`goBack`}>
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} className={`backIcon`} />
                  Back to home
                </Nav.Link>
              ) : (
                NavLink.map((link, i) => {
                  return (
                    <Nav.Link
                      href={
                        link.route === "/contact"
                          ? url.split("/")[3] === "services"
                            ? "/estimate"
                            : "/contact"
                          : link.route
                      }
                      className={
                        link.title === "estimate" ? "d-none" : "navbar__item"
                      }
                      key={i}
                    >
                      {link.title === "contact" ? (
                        <Button className={`endeavour-button`}>
                          {url.split("/")[3] === "services"
                            ? "Estimate"
                            : "contact"}
                        </Button>
                      ) : link.title !== "estimate" ? (
                        link.title
                      ) : (
                        ""
                      )}
                    </Nav.Link>
                  )
                })
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
export default Header
