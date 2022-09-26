import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import ecomCircle from "../../images/work/ecom.png"
import WorkSlider from "../../components/workSlider"
import ecomCircle1 from "../../images/ecomCircles/ecomCircle1.png"
import ecomCircle2 from "../../images/ecomCircles/ecomCircle2.png"
import ecomCircle3 from "../../images/ecomCircles/ecomCircle3.png"
import ecomCircle4 from "../../images/ecomCircles/ecomCircle4.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const EcomCircle = () => {
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
      img: ecomCircle1,
    },
    {
      img: ecomCircle2,
    },
    {
      img: ecomCircle3,
    },
    {
      img: ecomCircle4,
    },
  ]
  return (
    <Layout>
      <SEO title="Bwd App" />
      <WorkDetail
        heading="Ecom Circles"
        paragraph="We created a software to list all items one at a time or in bulk & to frequent update the stock and prices across platforms to prevent stock-outs and losses. The software helped in automatically repricing the items against competitors.The software also allows to keep track of the orders."
        Image={ecomCircle}
        paraHeading="The Problem"
        problem="The client was in need of an automation tool to manage the bulk product listings on multiple e-commerce platforms. He further wanted to completely track his orders and  wanted to automate the order placement procedure without any human interaction."
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="We created a software to list all items one at a time or in bulk & to frequent update the stock and prices across platforms to prevent stock-outs and losses. The software helped in automatically repricing the items against competitors.The software also allows to keep track of the orders."
        firstList={firstList}
        secondList={secondList}
      />
      <WorkSlider products={products} />
      <ClientFeedback />
      <div className="py-75 bg-mdnight">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </Layout>
  )
}

export default EcomCircle
