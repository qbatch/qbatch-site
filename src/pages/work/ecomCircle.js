import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import ecomCircle from "../../images/work/ecom.png"
import WorkSlider from "../../components/workSlider"
import ecomCircle1 from "../../images/ecomCircles/ecomCircle1.png"
import ecomCircle2 from "../../images/ecomCircles/ecomCircle2.png"
import ecomCircle3 from "../../images/ecomCircles/ecomCircle3.png"
import ecomCircle4 from "../../images/ecomCircles/ecomCircle4.png"
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
        paragraph="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        Image={ecomCircle}
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

export default EcomCircle
