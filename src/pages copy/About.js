import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function About() {
  return (
    <div>
<div class="container marginBottomCont">
    <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 marginBottomCol">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title captionSize aboutTextColor myBottomBorder">About Me</h2>
                    <img src="./assets/images/pic3.jpg" class="image-responsive johnPic float-left padding"
                        alt="Portrait picture" />
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
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 marginBottomCol">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title captionSize aboutTextColor myBottomBorder">Connect with me</h2>
                    <div class="row">
                        <h3 class="invisible">sidebar row containing Connection icons</h3>
                        <div class="col justify-content-center">
                            <a href="https://www.linkedin.com/in/j-toth-25bb4a208/" class="padding"
                                target="_blank"><img class="d-block m-auto" src="assets/images/LinkedInPic.png"
                                    style="width:42px;height:42px;" alt="LinkedIn" /></a>
                        </div>
                        <div class="col justify-content-center">
                            <a href="https://github.com/jtoth7824" class="padding" target="_blank"><img
                                    class="d-block p-auto m-auto" src="assets/images/GitHubPic.png"
                                    style="width:42px;height:42px;" alt="GitHub" /></a>
                        </div>
                        <div class="col justify-content-center">
                            <a href="https://stackoverflow.com/users/14297764/jtoth7824" class="padding"
                                target="_blank"><img class="d-block m-auto"
                                    src="assets/images/StackOverflowPic.png" style="width:42px;height:42px;"
                                    alt="StackOverflow" /></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">Email address: jtoth7824@gmail.com</div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">Phone number: 301-693-6688</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
  
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default About;
