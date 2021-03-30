import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import "./style.css";

function About() {
  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
      <Navbar />
      <div className="container">
      <AboutMe 
        style={{height:"42px", width:"42px"}} />
      </div>
      </Container>
</div>
  );
}

export default About;
