import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import salesSupport from "../../images/work/salesSupport.png"
import WorkSlider from "../../components/workSlider"
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
      img: salesSupport,
    },
    {
      img: salesSupport,
    },
    {
      img: salesSupport,
    },
    {
      img: salesSupport,
    },
    {
      img: salesSupport,
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
