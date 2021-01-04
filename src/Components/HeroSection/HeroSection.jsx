import React from "react";
import { Navbar, Image, Col, Row} from "react-bootstrap";
import WhiteLogo from "../../Assets/AirBnb-Logos/airbnb_white_logo.png";
import Background from "../../Assets/Cartoons/moutain_cottage_cartoon_jumbotron.png";
import SearchIcon from "@material-ui/icons/Search";
import { Divider } from "@material-ui/core";
import "../HeroSection/HeroSection.css";
import ExpandedSearchBar from "../ExpandedSearchBar/ExpandedSearchBar"


function HeroSection() {
  return (
    <div>
  <Navbar style={{backgroundColor:"transparent", position:"absolute"}}>
        <Navbar.Brand href="#home">
          <img
            src={WhiteLogo}
            height="40"
            className="d-inline-block ml-3"
            alt="AirBnB logo"
          />
        </Navbar.Brand>
     
      </Navbar>
   <Image src={Background} className="hero-image" />
          <div className="hero-text">go<br></br>near</div>
          <div className="hero-button"></div>

    </div>
  );
}

export default HeroSection;
