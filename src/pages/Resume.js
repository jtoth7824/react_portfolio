import React from "react";
import Container from "../components/Container";
import PDFResume from "../components/PDFResume";

function Resume () {

    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        <PDFResume />
        </Container>
      </div>
    );
}

export default Resume;
