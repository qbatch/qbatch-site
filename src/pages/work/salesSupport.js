import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import salesSupport from "../../images/work/salesSupport.png"
import WorkSlider from "../../components/workSlider"
import SalesSupport1 from "../../images/SalesSupport/SalesSupport1.png"
import SalesSupport2 from "../../images/SalesSupport/SalesSupport2.png"
import SalesSupport3 from "../../images/SalesSupport/SalesSupport3.png"
import SalesSupport4 from "../../images/SalesSupport/SalesSupport4.png"
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
        paragraph="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        Image={salesSupport}
        paraHeading="The Problem"
        problem="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        listHeading="Tech Stack"
        solHeading="The solution"
        solPara="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        firstList={firstList}
        secondList={secondList}
      />
      <WorkSlider products={products} />
    </Layout>
  )
}

export default SalesSupport
