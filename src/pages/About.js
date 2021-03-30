import React from "react";
import Container from "../components/Container";
import AboutMe from "../components/AboutMe";
import "./style.css";

function About() {
  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
      <div className="container">
      <AboutMe 
        style={{height:"42px", width:"42px"}} />
      </div>
      </Container>
</div>
  );
}

export default About;
