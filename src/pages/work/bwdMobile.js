import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import WorkDetail from "../../components/workDetail"
import BwdImg from "../../images/work/BWDwebShot.png"
import WorkSlider from "../../components/workSlider"
import Mobile1 from "../../images/MobileBWD/Mobile1.png"
import Mobile2 from "../../images/MobileBWD/Mobile2.png"
import Mobile3 from "../../images/MobileBWD/Mobile3.png"
import Mobile4 from "../../images/MobileBWD/Mobile4.png"
import Mobile5 from "../../images/MobileBWD/Mobile5.png"
import Mobile6 from "../../images/MobileBWD/Mobile6.png"
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
        heading="Blue Warehouse Discounts - Mobile"
        paragraph="Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, well as a random Lipsum generator. Reference site about Lorem Ipsum, information on its origins, well as a random Lipsum generator."
        Image={BwdImg}
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

export default BwdMobile
