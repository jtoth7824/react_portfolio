import React from "react";
import API from "../utils/API";
import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import PDFResume from "../components/PDFResume";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyPortfolio from "../components/MyPortfolio";

function Portfolio () {

    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        <Navbar />
        <MyPortfolio />
        <Footer />
        </Container>
      </div>
    );
}

export default Portfolio;
