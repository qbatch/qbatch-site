import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import oneApp from "../../images/work/oneApp.png"
import WorkSlider from "../../components/workSlider"
import OneApp1 from "../../images/OneApp/OneApp1.png"
import OneApp2 from "../../images/OneApp/OneApp2.png"
import OneApp3 from "../../images/OneApp/OneApp3.png"
import OneApp4 from "../../images/OneApp/OneApp4.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const OneApp = () => {
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
      img: OneApp1,
    },
    {
      img: OneApp2,
    },
    {
      img: OneApp3,
    },
    {
      img: OneApp4,
    },
  ]
  return (
    <Layout>
      <SEO title="Bwd App" />
      <WorkDetail
        heading="One App"
        paragraph="
        We developed a custom ecommerce marketplace by  automation tools which includes Prep, Pack & Ship to FBA (Manage/Create shipments, print labels), Automated Rule-based and Algorithmic Repriser (Algorithmic calculation of min/max and rule-based repricing strategies), Profit & Loss/Sales Analysis Reports, FBA Forecasting (Reordering Management including PPC spent),Orders Management (outbound & inbound fulfillment)."
        Image={oneApp}
        paraHeading="The Problem"
        problem="The client had more than 50 stores and needed to manage the daily inventory and stocks to be maintained in accordance.They wanted to automate their process flows in productivity,performance or to have better control. They also require a centralized dashboard & an automation tool to manage profit & loss analysis and logistics respectively."
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="
        We developed a custom ecommerce marketplace by  automation tools which includes Prep, Pack & Ship to FBA (Manage/Create shipments, print labels), Automated Rule-based and Algorithmic Repriser (Algorithmic calculation of min/max and rule-based repricing strategies), Profit & Loss/Sales Analysis Reports, FBA Forecasting (Reordering Management including PPC spent),Orders Management (outbound & inbound fulfillment)."
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

export default OneApp
