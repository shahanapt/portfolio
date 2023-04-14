import React from "react";
import { Container } from "react-bootstrap";
import image from "../../components/images/avatar-img.png";

function SectionOnes() {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div>
            <h3>Hello,It's Me</h3>
            <h1>Fathima shahana.p And I'm a Frontend Develo</h1>
            <h3>
              And I'm a{" "}
              <span style={{ color: "#2fa56e" }}>Frontend Developer</span>
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={image}
              style={{ width: "310px", height: "300px" }}
              alt={""}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOnes;
