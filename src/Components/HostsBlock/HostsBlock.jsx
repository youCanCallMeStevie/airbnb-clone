import React from "react";
import "../HostsBlock/HostsBlock.css";
import HostAnExpereince from "../../Assets/Photos/host-an-experience.png";
import HostOnline from "../../Assets/Photos/host-an-online-experience.png";
import HostHome from "../../Assets/Photos/host-your-home.png";
import { Container } from "react-bootstrap";

function HostsBlock() {
  return (
    <Container fluid>
      <h2>Join millions of hosts on Airbnb</h2>
      <div className="types-of-hosts-container">
        <div>
          <img
            src={HostHome}
            alt="Entire home"
            className="hosting-type-individual"
          />
          <p>Host your home</p>
        </div>
        <div>
          <img
            src={HostAnExpereince}
            alt="Host an expereince"
            className="hosting-type-individual"
          />
          <p>Host an experience</p>
        </div>
        <div>
          <img
            src={HostOnline}
            alt="Unique experiences"
            className="hosting-type-individual"
          />
          <p>Host an online experience</p>
        </div>
    
      </div>
    </Container>
  );
}

export default HostsBlock;
