import React from "react";
import { Card, Container } from "react-bootstrap";
import web1 from "../images/Capture.PNG";
import web2 from "../images/web-certificate.PNG";
import web3 from "../images/Capture-doc.PNG";
import web4 from "../images/Capture-snake.PNG";
import web5 from "../images/Capture-5.PNG";

function SectionFour() {
  return (
    <section className="portfolio" id="portfolio">
      <div
        style={{
          color: "white",
          background: "#000000eb",
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
              Latest <span style={{ color: "#ffffff" }}>Projects</span>
            </h1>
            <div>
              <div
                className="d-flex mb-4 flex-section-four"
                style={{ justifyContent: "space-around" }}
              >
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <div style={{ backgroundColor: "white" }}>
                        <img class="content-image" src={web1} alt="" />
                      </div>
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">HOSPITALITY</h3>
                        <p class="content-text">
                          For the greatest hospitality services, we can book
                          through the website for cleaning services for homes,
                          offices, hospitals, etc.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={web2} alt="" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">CERTIFICATE</h3>
                        <p class="content-text">
                          Website that offers a list of students, courses,
                          course categories, and supports CRUD operations.
                          create certificates based on the courses that each
                          student has completed.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={web3} alt="" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">PLAY STATION</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* 2nd row */}
              <div
                className="d-flex mt-4 flex-section-four"
                style={{ justifyContent: "space-around" }}
              >
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={web4} alt="" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={web5} alt="" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <Card className="card-section-four">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={web3} alt="" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default SectionFour;
