import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import { Container } from "react-bootstrap"
import urtasker from "../../images/work/urtasker.png"
import WorkSlider from "../../components/workSlider"
import Urtasker1 from "../../images/Urtasker/Urtasker1.png"
import Urtasker2 from "../../images/Urtasker/Urtasker2.png"
import Urtasker3 from "../../images/Urtasker/Urtasker3.png"
import Urtasker4 from "../../images/Urtasker/Urtasker4.png"
import Urtasker5 from "../../images/Urtasker/Urtasker5.png"
import Urtasker6 from "../../images/Urtasker/Urtasker6.png"
import ContactForm from "../../components/contactForm"
import ClientFeedback from "../../components/clientFeedback"
const Urtasker = () => {
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
      img: Urtasker1,
    },
    {
      img: Urtasker2,
    },
    {
      img: Urtasker3,
    },
    {
      img: Urtasker4,
    },
    {
      img: Urtasker5,
    },
    {
      img: Urtasker6,
    },
  ]
  return (
    <Layout>
      <SEO title="Bwd App" />
      <WorkDetail
        heading="Urtasker"
        paragraph="To Sell on the marketplace, we automated these followings with the tools. Product Listing, Listing Optimization, Keyword Implementation, PPC Management, Brand Management. Listing Optimization Services, Product Research, Competitor Analysis, Keyword Tracking, Infographics and Lifestyle, Backend Optimization. "
        Image={urtasker}
        paraHeading="The Problem"
        problem="The Client aimed to help small business owners to maximize their potential as well as expand their reach within marketplaces such as Amazon, eBay, and Walmart.  "
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="To Sell on the marketplace, we automated these followings with the tools. Product Listing, Listing Optimization, Keyword Implementation, PPC Management, Brand Management. Listing Optimization Services, Product Research, Competitor Analysis, Keyword Tracking, Infographics and Lifestyle, Backend Optimization."
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

export default Urtasker
