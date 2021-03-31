import React from "react";
import cardInfo from "../../cardInfo.js";

function Portfolio () {
    return (
        <div className="container containerColor marginBottomCont">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body mt-5">
                            <h2 className="card-title text-center text-white myBottomBorder">Recent Projects</h2>
                            <h3 className="text-center text-white">Examples of my recent projects</h3>
                            <div className="row ">
                                {/* <div className="card-deck"> */}
                                    {cardInfo.map(result => (
                                        <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-4 mb-4" key={result.id}>
                                        <div className="card h-100">
                                            <div className="embed-responsive embed-responsive-4by3">
                                                <img src={result.image}
                                                    className="card-img-top embed-responsive-item" alt="project"/>
                                            </div>
                                            <div className="card-body text-center cardBodyBorder">
                                                <h5 className="card-title">{result.title}</h5>
                                                <p className="card-text">{result.description}</p>
                                            </div>
                                            <div className="card-footer text-center">
                                                <a href={result.deployed} target="_blank" rel="noreferrer noopener"
                                                    className="btn myButton buttonMargin">See It Live</a>
                                                <a href={result.repository} target="_blank" rel="noreferrer noopener"
                                                    className="btn myButton buttonMargin">Visit Code</a>
                                            </div>
                                        </div>
                                        </div>
                                    ))}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;