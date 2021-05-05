import React from "react";
import aboutMePic from "../../images/pic3.jpg";
import GitHubPic from "../../images/GitHubPic.png";
import LinkedInPic from "../../images/LinkedInPic.png";
import StackOverflowPic from "../../images/StackOverflowPic.png";
import nodeIcon from "./nodeJsIcon.png";
import reactIcon from "./reactIcon.png";
import mongoIcon from "./mongoDbIcon.png";
import passportIcon from "./passportIcon.png";
import bootstrapIcon from "./bootstrapIcon.png";
import cloudinaryIcon from "./cloudinaryIcon.png";
import htmlCssIcon from "./javascriptIcon.png";
import jqueryIcon from "./jQueryIcon.png";

function AboutMe(props) {
    return (

<div className="container marginBottomCont">
    <br />
    <br />
    <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 marginBottomCol">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title captionSize aboutTextColor myBottomBorder">About Me</h2>
                    <img src={aboutMePic} className="image-responsive johnPic float-left padding"
                        alt="Portrait" />
                    <p>Hi, my name is John Toth. I am a full-stack web developer who recently completed (April 2021) a bootcamp in full stack web development
                        and earned a certificate from George Washington University.  I also have a B.S. in Computer Science and Engineering
                         from the Milwaukee School of Engineering.  I am seeking an opportunity where I can apply my newly acquired skillsets and am excited to apply
                         my knowledge of web development and testing to create better web applications.  I enjoy developing the back end of applications but also comfortable
                         in creating the front end.  See my Skills section for a representative sample of technologies I've utilized in my projects throughout the bootcamp.
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
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 marginBottomCol">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title captionSize aboutTextColor myBottomBorder">Connect with me</h2>
                    <div className="row">
                        <h3 className="invisible">sidebar row containing Connection icons</h3>
                        <div className="col justify-content-center">
                            <a href="https://www.linkedin.com/in/j-toth-25bb4a208/" className="padding"
                                target="_blank"  rel="noreferrer noopener"><img className="d-block m-auto" src={LinkedInPic}
                                style={props.style} alt="LinkedIn"/></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://github.com/jtoth7824" className="padding" target="_blank" rel="noreferrer noopener"><img
                                    className="d-block p-auto m-auto" src={GitHubPic} style={props.style}
                                     alt="GitHub" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://stackoverflow.com/users/14297764/jtoth7824" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={StackOverflowPic} style={props.style}
                                    alt="StackOverflow" /></a>
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
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title captionSize aboutTextColor myBottomBorder">Skills</h2>
                    <div className="row">
                        <div className="col justify-content-center">
                            <a href="https://nodejs.org/en/" className="padding"
                                target="_blank"  rel="noreferrer noopener"><img className="d-block m-auto" src={nodeIcon}
                                style={{height:"50px", width:"80px"}} alt="node.js"/></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://reactjs.org/" className="padding" target="_blank" rel="noreferrer noopener"><img
                                    className="d-block p-auto m-auto" src={reactIcon} style={props.style}
                                     alt="React" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://www.mongodb.com/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={mongoIcon} style={{height:"50px", width:"80px"}}
                                    alt="mongoDb" /></a>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col justify-content-center">
                            <a href="http://www.passportjs.org/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={passportIcon} style={props.style}
                                    alt="passport" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://getbootstrap.com/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={bootstrapIcon} style={props.style}
                                    alt="bootstrap" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://cloudinary.com/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={cloudinaryIcon} style={{height:"60px", width:"100px"}}
                                    alt="cloudinary" /></a>
                        </div>
                    </div>
                    
                    <div className="row">
                    <div className="col justify-content-center">
                            <a href="https://www.javascript.com/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={htmlCssIcon} style={{height:"75px", width:"100px"}}
                                    alt="html css javascript" /></a>
                        </div>
                        <div className="col justify-content-center">
                            <a href="https://jquery.com/" className="padding"
                                target="_blank" rel="noreferrer noopener"><img className="d-block m-auto"
                                    src={jqueryIcon} style={{height:"60px", width:"100px"}}
                                    alt="jquery" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default AboutMe;