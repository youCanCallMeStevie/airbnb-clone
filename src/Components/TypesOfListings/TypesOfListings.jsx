import React from "react";
import "../TypesOfListings/TypesOfListings.css";
import CabinsCottages from "../../Assets/Photos/cabins-and-cottages.png";
import EntireHomes from "../../Assets/Photos/entire-homes.png";
import PetsWelcome from "../../Assets/Photos/pets-welcome.png";
import UniqueExperiences from "../../Assets/Photos/unique-stays.png";
import { Container } from "react-bootstrap";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class TypesOfListings extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1125: {
        items: 4,
      },
    };

    // function TypesOfListings() {

    return (
        <Container fluid>       <h2>Live anywhere</h2>

      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div>
          <img className="listing-type-individual" src={EntireHomes} />
          <p>Entire homes</p>
        </div>

        <div>
          <img className="listing-type-individual" src={CabinsCottages} />
          <p>Cabins & Cottages</p>
        </div>
        <div>
          <img className="listing-type-individual" src={UniqueExperiences} />
          <p>Unique Experiences</p>
        </div>
        <div>
          <img className="listing-type-individual" src={PetsWelcome} />
          <p>Pets Welcome</p>
        </div>
      </AliceCarousel>
      </Container>
    );
  }
}

export default TypesOfListings;
