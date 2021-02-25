import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Image, Row, Col, Button } from "react-bootstrap"
import shapeUpper from "../../images/services/shapeUpper.png"
import shapeLower from "../../images/services/shapeLower.png"
import cloud from "../../images/services/cloud.png"
import ServicesList from "../../components/servicesList"
import ContactForm from "../../components/contactForm"
import Fast from "../../images/services/fast.svg"
import Security from "../../images/services/security.svg"
import Thumb from "../../images/services/thumb.svg"
import Quick from "../../images/services/quick.svg"
import ToolsList from "../../components/toolsList"
import Aws from "../../images/services/aws.svg"
import google from "../../images/services/google.svg"
import azure from "../../images/services/azure.svg"
import digital from "../../images/services/digital.svg"
import ec2 from "../../images/services/ec2.svg"
import ecs from "../../images/services/ecs.svg"
import lambda from "../../images/services/lambda.svg"
import amplify from "../../images/services/amplify.svg"
import s3 from "../../images/services/s3.svg"
import rds from "../../images/services/rds.svg"
import sqs from "../../images/services/sqs.svg"
import DevopsImg from "../../images/services/devops.png"
import FeaturedWork from "../../components/featuredWork"
import ClientFeedback from "../../components/clientFeedback"
import OtherServices from "../../components/otherServices"
const Devops = props => {
  const list = [
    {
      icon: Fast,
      title: "Fast and lightweight applications",
      para:
        "Cloud applications are fast in development and easy to maintain. Good response time.",
    },
    {
      icon: Security,
      title: "Increased data security",
      para:
        "Cloud Application Development enables an embedded and increased security of data in less cost.",
    },
    {
      icon: Thumb,
      title: "Reduce time and costs",
      para:
        "Cloud made it easy to deploy apps in the minimum time, which result in the less cost to develop and deploy.",
    },
    {
      icon: Quick,
      title: "Quick updates and deployments",
      para:
        "We can quickly update cloud applications with no hassle. Very easy to deploy apps.",
    },
  ]
  const tools = [
    Aws,
    google,
    azure,
    digital,
    ec2,
    ecs,
    lambda,
    amplify,
    s3,
    rds,
    sqs,
  ]
  return (
    <Layout>
      <SEO title="devops" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="row m-0">
            <div className="col-md-6">
              <div className="pt-174">
                <h2 className="mb-4">
                  <span className="endeavour">Cloud Engineering </span>
                  Services
                </h2>
                <p>
                  Our veteran technologists enable the unified transition to the
                  cloud from existing sources with a major disruption of your
                  usual business operations.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pt-150 text-right">
                <Image src={cloud} alt="no-image" className="mw-100" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-75">
          <div className="row m-0">
            <div className="col-md-6">
              <h3 className="heading">
                Update, test and deploy at lightning-speed with
                <span className="endeavour">cloud application development</span>
              </h3>
            </div>
            <div className="col-md-6">
              <p>
                Developing accessible solutions for better customer experience
                with Cloud Engineering Services bring a wide-array of models
                that redefines the seamless customer experience with high-end
                data security and easy accessibility.
              </p>
            </div>

            <div className="col-md-12 col-sm-12">
              <div className="text-center p-100">
                <h4>
                  Save <span className="endeavour">20%</span> on operational
                  costs and<span className="endeavour">100% </span> on capital
                  <br></br>
                  expenditure for increased
                  <span className="endeavour"> business efficiency</span>
                </h4>
                <p className="text-center">
                  Competitive prices and security that wouldn’t be possible with
                  an equivalent on-premises installation:
                </p>
              </div>
            </div>
          </div>
        </div>
        <ServicesList list={list} />
        <div className="py-75">
          <Row className="m-0">
            <Col md={6}>
              <h3>
                The right architecture for your application can be a game
                changer
              </h3>
            </Col>
            <Col md={6}>
              <p>
                Discover the power of cloud application development and how it
                can help you achieve more for less:
              </p>
            </Col>
          </Row>
        </div>
        <div className="process">
          <ul className="list-unstyled  process__container">
            <li className="process__step">
              <div className="process__circles"></div>
              <h5>Simplified Operation</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Instant Scalability</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Reduced Costs</h5>
            </li>
            <hr></hr>
            <li className="process__step">
              {" "}
              <div className="process__circles"></div>
              <h5>Improved Security</h5>
            </li>
          </ul>
        </div>
      </Container>
      <ToolsList
        tools={tools}
        heading="Tools and Technologies for Cloud Engineering"
      />
      <Container>
        <div className="py-75">
          <Row>
            <Col md={6}>
              <div className="d-flex flex-column justify-content-between h-100">
                <h3>
                  FinTech start-up<span className="endeavour"> Moonfare</span>{" "}
                  serves
                  <span className="endeavour"> 1,000</span> customers in their
                  first year with
                  <span className="endeavour"> zero costs</span> using AWS
                </h3>
                <h6>The power of AWS Lambda</h6>
                <p className="mb-0 ">
                  Lambda functions were used in the project allowing to pay
                  micropayments only for requests that have been handled –
                  serverless lets you process the code without needing to scale
                  up servers.
                </p>
                <p className="mb-0">
                  The cost? The first million requests in a month are totally
                  free of charge and once the limit has been exceeded Moonfare
                  is only charged $0.20 for every million requests.
                </p>
                <div className="btn-batch">
                  <Button variant="primary" className="endeavour-button">
                    read case study
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Image src={DevopsImg} alt="no-image" />
            </Col>
          </Row>
        </div>
      </Container>
      <FeaturedWork />
      <ClientFeedback />
      <OtherServices />
      <div className="py-75 bg-midnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default Devops
