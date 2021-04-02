import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import Logo from "../images/index/logo.svg"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <React.Fragment>
      <Header logo={Logo} />
      <main className={`pt-90`}>{children}</main>
      <Footer logo={Logo} />
    </React.Fragment>
  )
}
export default Layout
