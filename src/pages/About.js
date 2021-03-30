import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>

{/*       <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero> */}
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-8">
            <div className="container marginBottomCont">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 marginBottomCol">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title captionSize aboutTextColor myBottomBorder">About Me</h2>
                      <img src="../../public/images/pic3.jpg" className="image-responsive johnPic float-left padding" alt="help"/>
                      <p>Hi, my name is John Toth. I am a full-stack web developer currently looking for a new
                        position. I have a B.S. in Computer Science and Engineering from the Milwaukee School of
                        Engineering.
                        My anticipated completion date for full-stack developer is April 2021 from George
                        Washington University. My body of knowledge includes HTML5, CSS3, Javascript, jQuery,
                        Ajax, JSON and Node.js.
                      </p>
                      <p>Currently living in the Philadelphia area and would like to find a full-stack web
                        developer position in this area or the Trenton/Princeton area. I am open to relocating
                        for the right position. With Covid-19 restrictions, I'd prefer something remote right
                        now.
                      </p>
                      <p>Please see the menu option entitled Portfolio to see some of my recent projects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col size="md-4">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 marginBottomCol">
              <div className="card">
                 <div className="card-body">
                    <h2 className="card-title captionSize aboutTextColor myBottomBorder">Connect with me</h2>
                    <div className="row">
                        <h3 className="invisible">sidebar row containing Connection icons</h3>
                        <div className="col justify-content-center">
                            <a href="https://www.linkedin.com/in/j-toth-25bb4a208/" className="padding"
                                target="_blank"><img className="d-block m-auto" src="../../public/images/LinkedInPic.png" alt="LinkedIn" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://github.com/jtoth7824" className="padding" target="_blank"><img
                                    className="d-block p-auto m-auto" src="../../public/images/GitHubPic.png" alt="GitHub" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://stackoverflow.com/users/14297764/jtoth7824" className="padding"
                                target="_blank"><img className="d-block m-auto"
                                    src="../../public/images/StackOverflowPic.png" alt="StackOverflow" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">Email address: jtoth7824@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">Phone number: 301-693-6688</div>
                    </div>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
