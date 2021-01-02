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
      500: {
        items: 2,
      },
      750: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    };

    // function TypesOfListings() {

    return (
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
        <img className="listing-type-individual" src={EntireHomes} />
        <img className="listing-type-individual" src={CabinsCottages} />
        <img className="listing-type-individual" src={UniqueExperiences} />
        <img className="listing-type-individual" src={PetsWelcome} />
      </AliceCarousel>
      //     <Container fluid>
      //       <h2 style={{ marginLeft: "30px" }}>Live anywhere</h2>
      //       <div className="types-of-listings-container">
      //         <div>
      //           <img
      //             src={EntireHomes}
      //             alt="Entire home"
      //             className="listing-type-individual"
      //           />
      //           <p>Entire Homes</p>
      //         </div>
      //         <div>
      //           <img
      //             src={CabinsCottages}
      //             alt="Cabins & cottges"
      //             className="listing-type-individual"
      //           />
      //           <p>Cabins Cottges</p>
      //         </div>
      //         <div>
      //           <img
      //             src={UniqueExperiences}
      //             alt="Unique experiences"
      //             className="listing-type-individual"
      //           />
      //           <p>Unique Experiences</p>
      //         </div>
      //         <div>
      //           <img
      //             src={PetsWelcome}
      //             alt="Pets welcome"
      //             className="listing-type-individual"
      //           />
      //           <p>Pets Welcome</p>
      //         </div>
      //       </div>
      //     </Container>
    );
  }
}

export default TypesOfListings;
