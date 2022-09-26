import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import BwdImg from "../../images/work/BWDmobileShot.png"
import WorkSlider from "../../components/workSlider"
import Mobile1 from "../../images/MobileBWD/Mobile1.png"
import Mobile2 from "../../images/MobileBWD/Mobile2.png"
import Mobile3 from "../../images/MobileBWD/Mobile3.png"
import Mobile4 from "../../images/MobileBWD/Mobile4.png"
import Mobile5 from "../../images/MobileBWD/Mobile5.png"
import Mobile6 from "../../images/MobileBWD/Mobile6.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const BwdMobile = () => {
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
      img: Mobile1,
    },
    {
      img: Mobile2,
    },
    {
      img: Mobile3,
    },
    {
      img: Mobile4,
    },
    {
      img: Mobile5,
    },
    {
      img: Mobile6,
    },
  ]
  return (
    <Layout>
      <SEO title="Bwd App" />
      <WorkDetail
        heading="Blue Warehouse Discounts - Web"
        paragraph="We developed a marketplace that offers worldwide sellers to sell their products at a discounted price  the platform offers exchange & returns on closeouts, box damage, discontinued items, and anything else."
        Image={BwdImg}
        paraHeading="The Problem"
        problem="The client wanted to create a marketplace where he can allow the sellers from all around the world to sell their any kind of products on discounts and aimed to only offer the best deals and allow more attraction. "
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="We developed a marketplace that offers worldwide sellers to sell their products at a discounted price  the platform offers exchange & returns on closeouts, box damage, discontinued items, and anything else."
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

export default BwdMobile
