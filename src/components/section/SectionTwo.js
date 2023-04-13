import React from "react";
import { Button, Container } from "react-bootstrap";
import image from "../../components/images/avatar-img.png";

function SectionTwo() {
  return (
    <section className="about" id="about" style={{ background: "#141414" }}>
      <div className="main-bg" style={{ background: "#141414" }}>
        <Container style={{ color: "white" }}>
          {/* <div className='d-flex imgcontainer' style={{justifyContent:"space-evenly"}}>  */}
          <Container>
            <div className="main-flex-two">
              <div>
                <img
                  src={image}
                  style={{ width: "250px", height: "250px", margin: "0 10px" }}
                />
              </div>

              <div className="column-section-one">
                <h1 style={{ fontWeight: "bolder", fontSize: "40px" }}>
                  About <span style={{ color: "#2fa56e" }}>Me</span>
                </h1>
                <h3>Frontend Developer</h3>
                <p>
                  I'm looking for a supportive workplace that supports both
                  individual and group learning and persistence.{" "}
                </p>
                {/* <div> */}
                <Button className="section-btn">Read More</Button>
                {/* </div>  */}
              </div>
            </div>
          </Container>
        </Container>
      </div>
    </section>
  );
}

export default SectionTwo;
