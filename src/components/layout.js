import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import Logo from "../images/logo.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header logo={Logo} />
      <main className="pt-90">{children}</main>
      <Footer logo={Logo} />
    </>
  )
}
export default Layout
