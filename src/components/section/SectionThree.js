import React from "react";
import { Button, Card, Container } from "react-bootstrap";
// import "boxicons";
import { FaCode } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
function SectionThree() {
  return (
    <section className="services" id="services">
      <div
        style={{
          color: "white",
          background: "black",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <Container>
          <div>
            <h1
              style={{
                fontWeight: "bolder",
                color: "#2fa56e",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Services
            </h1>
            <div
              className="flex-section-three"
              style={{ justifyContent: "space-around" }}
            >
              <div style={{ alignSelf: "center", margin: "8px" }}>
                <Card className="card-section-three">
                  <div style={{ color: "#2fa56e" }}>
                    <FaCode style={{ height: "40px", width: "40px" }} />
                  </div>
                  <h3>Web Development</h3>
                  <p style={{ textAlign: "center" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <div style={{ alignSelf: "center" }}>
                    <Button className="section-btn">Read More</Button>
                  </div>
                </Card>
              </div>
              <div style={{ alignSelf: "center", margin: "8px" }}>
                <Card className="card-section-three">
                  <div style={{ color: "#2fa56e" }}>
                    <BiPaint style={{ height: "40px", width: "40px" }} />
                  </div>
                  <h3>Web Development</h3>
                  <p style={{ textAlign: "center" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <div style={{ alignSelf: "center" }}>
                    <Button className="section-btn">Read More</Button>
                  </div>
                </Card>
              </div>
              <div style={{ alignSelf: "center", margin: "8px" }}>
                <Card className="card-section-three">
                  <div style={{ color: "#2fa56e" }}>
                    <BiPaint style={{ height: "40px", width: "40px" }} />
                  </div>
                  <h3>Web Development</h3>
                  <p style={{ textAlign: "center" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard{" "}
                  </p>
                  <div style={{ alignSelf: "center" }}>
                    <Button className="section-btn">Read More</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default SectionThree;
