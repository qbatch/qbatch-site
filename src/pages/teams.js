import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Row, Col } from "react-bootstrap"
import MarketPresence from "../components/marketPresence"
import ClientFeedback from "../components/clientFeedback"
import FeaturedWork from "../components/featuredWork"
import ContactForm from "../components/contactForm"
import shapeLower from "../images/services/shapeLower.png"
import shapeUpper from "../images/services/shapeUpper.png"
import TeamsImg from "../images/services/teams.png"
import clickUp from "../images/services/clickUp.svg"
import channel from "../images/services/channel.png"
import scrum from "../images/services/scrum.png"

const Teams = () => {
  const Augmentation = [
    "Enables Real-time Performance Tracking",
    "Provides Access to project management tools",
    "Shared access with Client",
    "Participation of Client in Sprint Ceremonies",
    "Time Clocking Strategy",
    "Performance Review on Sprint/Kanban Boards",
  ]
  const Enablement = [
    "Assigned Project Owner at Qbatch",
    "Defined levels of Escalations",
    "Easy access to management for sensitive esclations",
    "Project Management through Client’s PM Tool",
    "Auditable Time Tracking Auditable Performance",
    "Tracking Process Oriented Requirement Gathering",
    "Comprehensive Technical Documentation",
  ]
  const Assurance = [
    "Application of QA tools to ensure quality",
    "Code Quality Evaluation",
    "Real-time testing",
    "Shared Documentation",
    "Time Clocking",
    "Tracking Process Oriented Requirement Gathering",
    "Effective Direct and Team Communication",
  ]
  const Execution = [
    {
      image: clickUp,
      title: "Clickup",
      paragraph:
        "Tasks are maintained on a daily basis. This allows you to get a quick overview on where the team stands.",
    },
    {
      image: channel,
      title: "Email & Teams Channels",
      paragraph:
        "Each team member posts a daily update on email/slack. This includes tasks done today, tasks planned for tomorrow and blockers.",
    },
    {
      image: scrum,
      title: "Daily & Weekly Scrum Call",
      paragraph:
        "Depending on how involved the client wants to be, daily or weekly scrum calls are setup to stay on top of what's going on within the project.",
    },
  ]
  return (
    <Layout>
      <SEO title="Development Team" />
      <div className="bg-selago">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <div className="row m-0">
            <div className="col-md-6">
              <div className="pt-174">
                <h2>Your Software Development</h2>
                <h2 className="mb-4">
                  <span className="endeavour">Dream Team</span>
                </h2>
                <p>
                  Deal with Your Strategic Business Plans & Leave IT Operations
                  to Us.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pt-150 text-right">
                <Image src={TeamsImg} alt="no-image" className="mw-100" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-75">
          <h3>Team Augmentation</h3>
          <p>
            We adapt Agile Methodologies, Project Enablement tools for auditable
            performance Tracking with an automated tool of Quality Assurance to
            ensure that our customers are being served with the Optimum service
            levels.
          </p>
          <p>
            Hire dedicated IT professionals to free yourself from the burden of
            staff recruitment and training. Just send us your requirements. We
            will, then, schedule a live interview with your selected resource
            person on your preferred medium - Skype, Phone or IM, etc.
          </p>
        </div>
      </Container>
      <div className="bg-selago py-75">
        <Image src={shapeUpper} className="shapeUpper" alt="no-image" />
        <Image src={shapeLower} className="shapeLower" alt="no-image" />
        <Container>
          <Row className="m-0">
            <Col md={6}>
              <h4>Dedicated Team </h4>
              <p>
                At Qbatch we host dedicated teams with effective propositions to
                seamless delivery of business process without being constrained
                by domestic and international boundaries.
              </p>
              <h6>Full Service Standalone Team</h6>
              <ul className="list-unstyled dedicated">
                <li className="dedicated__list">
                  Not looking to build a complete software department but need
                  tech resources on demand.
                </li>
                <li className="dedicated__list">
                  Offers a complete setup where you get access to the best tech
                  and management talent (developers, UI/UX experts).
                </li>
              </ul>
              <h6 className="pt-40">Suited best when:</h6>
              <ul className="list-unstyled dedicated">
                <li className="dedicated__list">
                  developing new products without defocusing your core team (if
                  exists)
                </li>
                <li className="dedicated__list">
                  with evolving specifications based on feedbacks on features
                  not looking to go through long-lasting & expensive hiring
                  process.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <h4>Development Outsourcing</h4>
              <p>
                We offer to host resources on cost-sharing model where the
                resource capacity can be factored-in with respect the depth of
                requirements and required support levels.
              </p>
              <h6>Full Stack Resource</h6>
              <ul className="list-unstyled dedicated">
                <li className="dedicated__list">
                  Working on a small product and wanted to hire a single
                  resource to handle in and outs of the product.
                </li>
                <li className="dedicated__list">
                  Need a research about the product and want a single product
                  designer.
                </li>
              </ul>
              <h6 className="pt-40">Suited best when:</h6>
              <ul className="list-unstyled dedicated">
                <li className="dedicated__list">
                  Complete UI/UX Design of the digital product. Using research
                  and complete ROI of the product.
                </li>
                <li className="dedicated__list">
                  Need a Uni Focused resource to work on the product.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-midnight">
        <div className="py-75">
          <Container>
            <h3 className="text-light text-center">
              Why Dedicated Teams With Qbatch?
            </h3>
            <p className="text-light text-center px-30">
              Hiring our highly scrutinized dedicated teams will provide you
              with some exceptional added advantages,<br></br> that can make the
              whole process secure and hassle-free for you.
            </p>
            <Row className="m-0">
              <Col md={4}>
                <h6 className="text-light mb-4">Team Augmentation</h6>
                <ul className="teamsList">
                  {Augmentation.map((argument, argumentKey) => (
                    <li className="teamsList__list" key={argumentKey}>
                      {argument}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={4}>
                <h6 className="text-light mb-4">Team Augmentation</h6>
                <ul className="teamsList">
                  {Enablement.map((enablement, enablementKey) => (
                    <li className="teamsList__list" key={enablementKey}>
                      {enablement}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={4}>
                <h6 className="text-light mb-4">Team Augmentation</h6>
                <ul className="teamsList">
                  {Assurance.map((assurance, assuranceKey) => (
                    <li className="teamsList__list" key={assuranceKey}>
                      {assurance}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="py-75">
        <Container>
          <h3>Transparent Execution</h3>
          <p>
            To keep you well informed and updated regarding the progress of your
            project,<br></br> we employ agile based project management, with
            100% online cloud based tools<br></br> to ensure round the clock
            visibility.
          </p>
          <Row className="m-0">
            {Execution.map((execution, executionKey) => {
              return (
                <Col md={4} key={executionKey}>
                  <div className="execution">
                    <Image src={execution.image} alt="no-image" />
                    <h6 className="inner-h6">{execution.title}</h6>
                    <p>{execution.paragraph}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <MarketPresence />
      <ClientFeedback />
      <FeaturedWork />
      <div className="py-75 bg-midnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default Teams
