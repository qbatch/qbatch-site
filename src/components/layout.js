import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import "./layout.scss"
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
