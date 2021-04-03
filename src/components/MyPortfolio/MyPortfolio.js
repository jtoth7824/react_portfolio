import React from "react";
import Project from "../Project";
import cardInfo from "../../cardInfo";

function Portfolio () {
    return (
        <div className="container containerColor marginBottomCont">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body mt-5">
                            <h2 className="card-title text-center text-white myBottomBorder1">Recent Projects</h2>
                            <br />
                            <h3 className="text-center text-white">Examples of my recent projects</h3>
                            <div className="row row-cols-1 rows-cols-md-3">
                                    {cardInfo.map(result => (
                                        <Project 
                                            id = {result.id}
                                            image = {result.image}
                                            title = {result.title}
                                            description = {result.description}
                                            deployed = {result.deployed}
                                            github = {result.github}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;