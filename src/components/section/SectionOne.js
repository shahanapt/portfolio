import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Section.css";
import image from "../../components/images/avatar-img.png";
import { BsWhatsapp } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
// import resumepdf from "../images/RESUME-fathima shahana.p.pdf"
function SectionOne() {
  return (
    <section className="home" id="home">
      <div className="main-bg">
        <Container style={{ color: "white" }}>
          {/* <div className='d-flex imgcontainer' style={{justifyContent:"space-evenly"}}>  */}
          <Container>
            <div className="main-flex">
              <div className="column-section-one">
                <h3>Hello,It's Me</h3>
                <h1 style={{ fontSize: "40px" }}>Fathima shahana.p</h1>
                {/* <h3>And I'm a <span style={{color:"#2fa56e"}}>Frontend Developer</span></h3> */}
                <div>
                  <h3 className="d-flex">
                    And I'm a
                    <div style={{ color: "#2fa56e", margin: "0 8px" }}>
                      <Typewriter
                        options={{
                          strings: ["Frontend Developer", " Web developer"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  </h3>
                </div>
                <p>
                  I am a tolerant individual who likes interacting with people
                  from various backgrounds. A perceptive and energetic person
                  who is willing to study and go deeply into the subject.{" "}
                </p>
                <div className="d-flex" style={{ gap: "15px" }}>
                  <div className="section-icon">
                    <a
                      href="https://github.com/shahanapt"
                      style={{ color: "#2fa56e" }}
                    >
                      <BsGithub />
                    </a>
                  </div>
                  <div className="section-icon">
                    <a
                      href="https://www.linkedin.com/in/fathima-shahana-p"
                      style={{ color: "#2fa56e" }}
                    >
                      <FaLinkedinIn />{" "}
                    </a>
                  </div>
                  <div className="section-icon">
                    <BsWhatsapp />
                  </div>
                  <div className="section-icon">
                    <RiInstagramLine />
                  </div>
                </div>
                <div>
                  <a
                    href="RESUME-fathima shahana.p.pdf"
                    download="RESUME-fathima shahana.p.pdf"
                  >
                    <Button className="section-btn">Download CV</Button>
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className="profileimage"
                  src={image}
                  style={{ maxHeight: "250px", maxWidth: "250px" }}
                  alt={""}
                />
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </section>
  );
}

export default SectionOne;
