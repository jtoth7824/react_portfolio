import React from "react";
import "./style.css";
import Petocracy from "../../images/PetocracyHome.png";
import MovieInfo from "../../images/MovieInfo.png";
import UserSearchCity from "../../images/UserSearchCity.png";
import StartScreenJavascriptQuiz from "../../images/StartScreenJavascriptQuiz.png";
import TPG2 from "../../images/TPG2.png";
import burgerMain from "../../images/burgerMain.png";
import cardInfo from "../../cardInfo.js";

function Portfolio (props) {
    return (

        <div className="container containerColor marginBottomCont">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body">

                            <h2 className="card-title text-center text-white myBottomBorder">Recent Projects</h2>

                            <h3 className="text-center text-white">Examples of my recent projects</h3>

                            <div className="row">
                                <div className="card-deck">
                                {cardInfo.map(result => (
                                    <div className="card " key={result.id}>
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <img src={result.image}
                                            className="card-img-top embed-responsive-item" alt="..."/>
                                    </div>
                                    <div className="card-body text-center cardBodyBorder">
                                        <h5 className="card-title">{result.title}</h5>
                                        <p className="card-text">{result.description}</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href={result.deployed} target="_blank"
                                            className="btn myButton buttonMargin">See It Live</a>
                                        <a href={result.repository} target="_blank"
                                            className="btn myButton buttonMargin">Visit Code</a>
                                    </div>
                                </div>
          ))}
{/*                                     <div className="card ">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={Petocracy}
                                                className="card-img-top embed-responsive-item" alt="..."/>
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Petocracy</h5>
                                            <p className="card-text">Allows users to sign up for help (services/donations)
                                                during Covid. Also, allows volunteers to sign up to donate or provide
                                                those requested services.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://immense-coast-50151.herokuapp.com/" target="_blank"
                                                className="btn myButton buttonMargin">See It Live</a>
                                            <a href="https://github.com/jtoth7824/group1_project2" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div>

                                    <div className="card ">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={MovieInfo}
                                                className="card-img-top embed-responsive-item" alt="..."/>
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Book/Cinema Library</h5>
                                            <p className="card-text">Allows user to search by author name to find book and
                                                author event information. If corresponding movie exists for book, then
                                                movie information displayed.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://jtoth7824.github.io/group_project1" target="_blank"
                                                className="btn myButton buttonMargin">See It Live</a>
                                            <a href="https://github.com/jtoth7824/group_project1/" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div> */}
                                    <div className="card">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={UserSearchCity}
                                                className="card-img-top embed-responsive-item" alt="..."/>
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Weather Dashboard</h5>
                                            <p className="card-text">Allows user to get weather information about city
                                                selected.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://jtoth7824.github.io/weatherDashboard" target="_blank"
                                                className="btn myButton buttonMargin">See It Live</a>
                                            <a href="https://github.com/jtoth7824/weatherDashboard/" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-deck">
                                    <div className="card">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={StartScreenJavascriptQuiz}
                                                className="card-img-top embed-responsive-item" alt="..."/>
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Javascript Quiz</h5>
                                            <p className="card-text">Take a quick javascript quiz.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://jtoth7824.github.io/javascriptCodeQuiz" target="_blank"
                                                className="btn myButton buttonMargin">See It Live</a>
                                            <a href="https://github.com/jtoth7824/javascriptCodeQuiz/" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={TPG2}
                                                className="card-img-top embed-responsive-item" alt="..." />
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Team Profile Generator</h5>
                                            <p className="card-text">Generate a team consisting of manager, engineers and
                                                interns.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://github.com/jtoth7824/teamProfileGenerator/" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <img src={burgerMain}
                                                className="card-img-top embed-responsive-item" alt="..." />
                                        </div>
                                        <div className="card-body text-center cardBodyBorder">
                                            <h5 className="card-title">Eat Da Burger</h5>
                                            <p className="card-text">Allows user to enter a burger name to add to list of
                                                available.
                                                User can then click Eat Me button to devour burger and move it to
                                                devoured list.</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <a href="https://morning-island-76519.herokuapp.com/" target="_blank"
                                                className="btn myButton buttonMargin">See It Live</a>
                                            <a href="https://github.com/jtoth7824/burger/" target="_blank"
                                                className="btn myButton buttonMargin">Visit Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;