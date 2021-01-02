import React from "react";
import "../TypesOfListings/TypesOfListings.css";
import CabinsCottages from "../../Assets/Photos/cabins-and-cottages.png";
import EntireHomes from "../../Assets/Photos/entire-homes.png";
import PetsWelcome from "../../Assets/Photos/pets-welcome.png";
import UniqueExperiences from "../../Assets/Photos/unique-stays.png";
import { Container } from "react-bootstrap";

function TypesOfListings() {
  return (
    <Container fluid>
      <h2 style={{ marginLeft: "30px" }}>Live anywhere</h2>
      <div className="types-of-listings-container">
        <div>
          <img
            src={EntireHomes}
            alt="Entire home"
            className="listing-type-individual"
          />
          <p>Entire Homes</p>
        </div>
        <div>
          <img
            src={CabinsCottages}
            alt="Cabins & cottges"
            className="listing-type-individual"
          />
          <p>Cabins Cottges</p>
        </div>
        <div>
          <img
            src={UniqueExperiences}
            alt="Unique experiences"
            className="listing-type-individual"
          />
          <p>Unique Experiences</p>
        </div>
        <div>
          <img
            src={PetsWelcome}
            alt="Pets welcome"
            className="listing-type-individual"
          />
          <p>Pets Welcome</p>
        </div>
      </div>
    </Container>
  );
}

export default TypesOfListings;
