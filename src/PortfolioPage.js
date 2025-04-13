import React from "react";
import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Certificates from "./sections/Certificate";

function PortfolioPage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Certificates/>
      <Services />
      <Portfolio />
    </div>
  );
}

export default PortfolioPage;
