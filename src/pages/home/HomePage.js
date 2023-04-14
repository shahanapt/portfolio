import React from "react";
import NavBar from "../../components/navbar/NavBar";
import SectionFive from "../../components/section/SectionFive";
import SectionFour from "../../components/section/SectionFour";
import SectionOne from "../../components/section/SectionOne";
// import SectionOnes from "../../components/section/sectionOnes";
import SectionThree from "../../components/section/SectionThree";
import SectionTwo from "../../components/section/SectionTwo";

function HomePage() {
  return (
    <div>
      {/* <Container style={{width:"100%"}}> */}
      {/* <div> */}
      {/* <Container> */}
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* </Container> */}
    </div>
  );
}

export default HomePage;
