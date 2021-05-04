import React from "react";

function Project (props) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4 marginBottomCol" key={props.id}>
            <div className="card h-100">
                <div className="embed-responsive embed-responsive-4by3">
                    <img src={props.image}
                        className="card-img-top embed-responsive-item" alt="project"/>
                </div>
                <div className="card-body text-center cardBodyBorder">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><strong>Skills:</strong> {props.skills}</p>
                    <p className="card-text"><strong>Role:</strong> {props.role}</p>
                </div>
                <div className="card-footer text-center">
                    <a href={props.deployed} target="_blank" rel="noreferrer noopener"
                        className="btn myButton buttonMargin">See It Live</a>
                    <a href={props.github} target="_blank" rel="noreferrer noopener"
                        className="btn myButton buttonMargin">Visit Code</a>
                </div>
            </div>
        </div>
    )
}

export default Project;