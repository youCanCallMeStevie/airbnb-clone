import React from "react";
import { Jumbotron, Container,Image } from "react-bootstrap";
import Background from "../../Assets/Cartoons/moutain_cottage_cartoon_jumbotron.png";
import "../HeroSection/HeroSection.css";


function HeroSection() {
  return (
    <div>
      <div className="mainframe">
        <div className="main-content">
          <Image src={Background} className="hero-image" />
         </div>
         </div>
    </div>
  );
}

export default HeroSection;
