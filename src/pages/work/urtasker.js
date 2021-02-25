import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import urtasker from "../../images/work/urtasker.png"
import WorkSlider from "../../components/workSlider"
import Urtasker1 from "../../images/Urtasker/Urtasker1.png"
import Urtasker2 from "../../images/Urtasker/Urtasker2.png"
import Urtasker3 from "../../images/Urtasker/Urtasker3.png"
import Urtasker4 from "../../images/Urtasker/Urtasker4.png"
import Urtasker5 from "../../images/Urtasker/Urtasker5.png"
import Urtasker6 from "../../images/Urtasker/Urtasker6.png"
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
        paragraph="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        Image={urtasker}
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

export default Urtasker
