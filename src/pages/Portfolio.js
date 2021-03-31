import React from "react";
import Container from "../components/Container";
import MyPortfolio from "../components/MyPortfolio";

function Portfolio () {

    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <MyPortfolio />
        </Container>
      </div>
    );
}

export default Portfolio;
