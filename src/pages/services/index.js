import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import { Container, Image, Button } from "react-bootstrap"
import EnterpriseBusiness from "../../images/ServicesImages/EnterpriseBusiness.png"
import CrossPlatform from "../../images/ServicesImages/CrossPlatform.png"
import WebDevelopment from "../../images/ServicesImages/WebDevelopment.png"
import CloudEngineering from "../../images/ServicesImages/CloudEngineering.png"
import UIUX from "../../images/ServicesImages/UIUX.png"
import BusinessConsulting from "../../images/ServicesImages/BusinessConsulting.png"
import ClientFeedback from "../../components/clientFeedback"
import ContactForm from "../../components/contactForm"
function Index() {
  return (
    <Layout>
      <SEO title="services" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="pt-174">
            <h1>
              Our <span className="color-change">Services</span>
            </h1>
            <p>
              We offer expertise for end-to-end product design and development,
              with<br></br> solutions tailor-made to fit your product’s unique
              requirements.
            </p>
          </div>
        </Container>
      </div>
      <div className="services-list">
        <Container>
          <div className="pt-100">
            <div className="row m-0">
              <div className="col-md-6 ">
                <div className="d-flex flex-column justify-content-between h-100 pt-50">
                  <h5>Enterprise Business Solutions</h5>
                  <p>
                    We dive deeper into the systems to fetch-out the
                    requirements that can boost your business efficiency through
                    various system integrations, rewriting of legacy software
                    and more.
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">Scraping & Automation</li>
                    <li className="list__item">Systems Modernization</li>
                    <li className="list__item">Systems Integrations</li>
                    <li className="list__item">Quality Assurance</li>
                    <li className="list__item">Single Enterprise Directory</li>
                    <li className="list__item">Workflow Management</li>
                    <li className="list__item">Reporting and Analysis</li>
                  </ul>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See More details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image
                    src={EnterpriseBusiness}
                    className="mw-100"
                    alt="no-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image
                    src={CrossPlatform}
                    className="mw-100"
                    alt="no-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 pt-50 pl-70">
                  <h5>Cross Platform Mobile Development</h5>
                  <p>
                    We develop the Mobile applications using Native and Cross
                    platform Frameworks for Android and iOS with a premium
                    attention about the scalability and optimization
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">Cross Platform Development</li>
                    <li className="list__item">Quality Assurance</li>
                    <li className="list__item">
                      Native Application Development
                    </li>
                    <li className="list__item">User Oriented Design</li>
                  </ul>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See More details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="d-flex flex-column justify-content-between h-100 pt-50">
                  <h5>Web Development</h5>
                  <p>
                    We improve accessibility of business functions for users and
                    broaden horizons for the respective existing and potential
                    customers, we develop tailor-made Responsive Web Apps
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">User-Friendly Web Apps</li>
                    <li className="list__item">Responsive Designs</li>
                    <li className="list__item">Scalable Solution</li>
                    <li className="list__item">Web Apps Modernization</li>
                  </ul>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See More details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image
                    src={WebDevelopment}
                    className="mw-100"
                    alt="no-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image
                    src={CloudEngineering}
                    className="mw-100"
                    alt="no-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 pt-50 pl-70">
                  <h5>Cloud Engineering Services</h5>
                  <p>
                    Developing accessible solutions for better customer
                    experience with Cloud Engineering Services bring a
                    wide-array of models that redefines the seamless customer
                    experience.
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">Cloud Strategy</li>
                    <li className="list__item">Cloud Transitioning</li>
                    <li className="list__item">Cloud Migration</li>
                    <li className="list__item">Cloud Advisory</li>
                  </ul>
                  <Link to="/services/devops">
                    <div className="btn-batch">
                      <Button variant="primary" className="endeavour-button">
                        See More details
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="d-flex flex-column justify-content-between h-100 pt-50">
                  <h5>UI/UX Design & Development</h5>
                  <p>
                    We offer an aesthetical approach for the seamless customer
                    experience with a narrow focus on the look and feel of the
                    systems and software.
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">User Research</li>
                    <li className="list__item">Low-Fi Wireframing</li>
                    <li className="list__item">High-Fi Wireframing</li>
                    <li className="list__item">Visual Design</li>
                    <li className="list__item">Prototyping</li>
                    <li className="list__item">User Testing</li>
                  </ul>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See More details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image src={UIUX} className="mw-100" alt="no-image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="pt-50">
                  <Image
                    src={BusinessConsulting}
                    className="mw-100"
                    alt="no-image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-between h-100 pt-50 pl-70">
                  <h5>Business Consulting</h5>
                  <p>
                    We enable and facilitate in steering an exhaustive activity
                    of translation of thoughts and ideal experiences to the
                    real-time products. Advice on modern technology and tools.
                  </p>
                  <ul className="list-unstyled list">
                    <li className="list__item">Discovery Workshops</li>
                    <li className="list__item">Features Exploration</li>
                    <li className="list__item">Sketching Ideas</li>
                    <li className="list__item">Advisory Services</li>
                    <li className="list__item">
                      Tech-Enabled Business Strategy
                    </li>
                    <li className="list__item">Technology Assurance</li>
                    <li className="list__item">
                      Modern Technology & Industry Best Practices
                    </li>
                  </ul>
                  <div className="btn-batch">
                    <Button variant="primary" className="endeavour-button">
                      See More details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-selago">
        <Container>
          <ClientFeedback />
        </Container>
      </div>
      <div className="bg-midnight p-30">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default Index
