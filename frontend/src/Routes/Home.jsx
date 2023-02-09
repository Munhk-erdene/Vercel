import React from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Shorty from "../components/Shorty";
import Made from "../components/Made";
import HowItWorks from "../components/HowItWorks";
function Home() {
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <div className="history">History</div>
        <HowItWorks />
        <Header />
      </div>
      <div className="bodyContainer">
        <Logo />
        <Shorty />
      </div>
      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Home;
