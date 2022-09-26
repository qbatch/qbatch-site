import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import BwdImg from "../../images/work/bwd.png"
import WorkSlider from "../../components/workSlider"
import BWDWeb1 from "../../images/BWDweb/BWDWeb1.png"
import BWDWeb2 from "../../images/BWDweb/BWDWeb2.png"
import BWDWeb3 from "../../images/BWDweb/BWDWeb3.png"
import BWDWeb4 from "../../images/BWDweb/BWDWeb4.png"
import BWDWeb5 from "../../images/BWDweb/BWDWeb5.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const Bwd = () => {
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
      img: BWDWeb1,
    },
    {
      img: BWDWeb2,
    },
    {
      img: BWDWeb3,
    },
    {
      img: BWDWeb4,
    },
    {
      img: BWDWeb5,
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

export default Bwd
