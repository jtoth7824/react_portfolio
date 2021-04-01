import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        <Footer />
    </Router>
  );
}

export default App;
