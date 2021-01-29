import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Image, Button } from "react-bootstrap"
import IndexImage from "../images/index.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    {/* <section className="background">
      <div className="outer-left">
        <div className="container">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. Lorem ipsum, or lipsum as it is sometimes known,
          is dummy text used in laying out print, graphic or web designs. The
          passage is attributed to an unknown typesetter in the 15th century who
          is thought to have scrambled parts of Cicero's De Finibus Bonorum et
          Malorum for use in a type specimen book.
        </div>
      </div>
    </section> */}
    <div className="background">
      <div class="skewed-bg">
        <div class="content">
          <Container className="pt-155">
            <div className="row m-0">
              <div className="col-md-6">
                <div className="text-left">
                  <h1>Automating Ideas for Optimum ROI</h1>
                  <p>
                    Adapting Emerging Technologies, Modernizing Legacy Systems &
                    Developing User Friendly Solutions that yields maximum
                    productivity in lower down
                  </p>
                  <div className="btn-batch d-flex">
                    <Button variant="primary" className="endeavour-button">
                      Let's Chat
                    </Button>
                    <Button className="outline-button ml-4">Our Work</Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-right position-relative">
                  <Image src={IndexImage} className="image-space" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <footer class="footer">
        <Container>
          <div className="row m-0">
            <div className="col-md-6">
              <h6 className="hwr">Who We Are </h6>
              <h3 className="hwr-types">
                Strategists, Devbots, Visualizers & Executors
              </h3>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <h1>2015</h1>
                  <h3 className="h-title">Established</h3>
                </div>
                <div className="d-flex flex-column">
                  <h1>300+</h1>
                  <h2 className="h-title">Clients</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="pb-3">
                We are a team of diverse masters, encompassing holistic services
                required to design seamless experiences and progressive
                solutions, where we Define the Systems, Refine the Legacy
                Systems, Propose Iterations for ease, Develop the user-friendly
                products & features & Test the minimum viability as well as
                optimum performance of the systems.
              </p>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column">
                  <h1>500</h1>
                  <h2 className="h-title">Projects</h2>
                </div>
                <div className="d-flex flex-column">
                  <h1>100</h1>
                  <h2 className="h-title">Teams</h2>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  </Layout>
)

export default IndexPage
