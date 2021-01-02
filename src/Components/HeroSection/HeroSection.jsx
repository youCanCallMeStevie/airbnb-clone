import React from "react";
import { Image } from "react-bootstrap";
import Background from "../../Assets/Cartoons/moutain_cottage_cartoon_jumbotron.png";
import "../HeroSection/HeroSection.css";


function HeroSection() {
  return (
    <div>
   <Image src={Background} className="hero-image" />
          <div className="hero-text">go<br></br>near</div>
          <div className="hero-button"></div>

    </div>
  );
}

export default HeroSection;
