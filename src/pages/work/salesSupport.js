import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import salesSupport from "../../images/work/salesSupport.png"
import WorkSlider from "../../components/workSlider"
import SalesSupport1 from "../../images/SalesSupport/SalesSupport1.png"
import SalesSupport2 from "../../images/SalesSupport/SalesSupport2.png"
import SalesSupport3 from "../../images/SalesSupport/SalesSupport3.png"
import SalesSupport4 from "../../images/SalesSupport/SalesSupport4.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const SalesSupport = () => {
  const firstList = [
    "ReactJS",
    "React Native",
    "Redux",
    "MongoDB",
    "Node.js",
    "Docker",
    "AWS",
  ]
  const secondList = [
    "Bradning",
    "User Research",
    "Wireframing",
    "UI Design  ",
    "Interactive Prototyping",
    "User Testing",
  ]
  const products = [
    {
      img: SalesSupport1,
    },
    {
      img: SalesSupport2,
    },
    {
      img: SalesSupport3,
    },
    {
      img: SalesSupport4,
    },
  ]
  return (
    <Layout>
      <SEO title="Bwd App" />
      <WorkDetail
        heading="Sales Support"
        paragraph="We developed a tool to automate their wholesale vendor list in real-time which analyzes any catalog to determine the profitability of a wide range of products without having to do any retail arbitrage and ongroud research. "
        Image={salesSupport}
        paraHeading="The Problem"
        problem="Client wanted a SAAS based product for their 500+ sub sellers to subscribe and be able to access tools like, Supplier Management, Amazon wholesale business & 3PL solutions, Wholesale Listing, Inventory Management, Reimbursements, Restocker, Repricer, Complete Warehouse management, Sales & Profit Analysis and FBA Shipments into Amazon."
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="We developed a tool to automate their wholesale vendor list in real-time which analyzes any catalog to determine the profitability of a wide range of products without having to do any retail arbitrage and ongroud research. "
        firstList={firstList}
        secondList={secondList}
      />
      <WorkSlider products={products} />
      <ClientFeedback />
      <div className={`py-75 bg-mdnight`}>
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default SalesSupport
