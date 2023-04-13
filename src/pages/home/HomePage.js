import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavBar from "../../components/navbar/NavBar";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import SectionFive from "../../components/section/SectionFive";
import SectionFour from "../../components/section/SectionFour";
import SectionOne from "../../components/section/SectionOne";
import SectionOnes from "../../components/section/sectionOnes";
import SectionThree from "../../components/section/SectionThree";
import SectionTwo from "../../components/section/SectionTwo";

function HomePage() {
  return (
    <div>
      {/* <Container style={{width:"100%"}}> */}
        {/* <div> */}
        {/* <Container> */}
        <NavBar/>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour/>
        <SectionFive/>
        {/* </Container> */}
    </div>
  );
}

export default HomePage;



