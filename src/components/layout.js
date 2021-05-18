import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"
import Logo from "../images/index/logo.svg"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header logo={Logo} />
      <main className={`pt-90`}>{children}</main>
      <Footer logo={Logo} />
      <Helmet>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </Helmet>
    </React.Fragment>
  )
}
export default Layout
