import React from 'react';
import AliceCarousel from 'react-alice-carousel';


class Testing extends React.Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
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

<img src={CabinsCottages} onDragStart={handleDragStart} className="listing-type-individual" />,
  <img src={EntireHomes} onDragStart={handleDragStart} className="listing-type-individual" />,
  <img src={PetsWelcome} onDragStart={handleDragStart} className="listing-type-individual" />,
  <img src={UniqueExperiences} onDragStart={handleDragStart} className="listing-type-individual" />,
        <img className="listing-type-individual" src={EntireHomes}/>
        <img className="listing-type-individual" src={CabinsCottages}/>
        <img className="listing-type-individual" src={UniqueExperiences}/>
        <img className="listing-type-individual" src={PetsWelcome}/>
      </AliceCarousel>
    );
  }
}

export default Testing;
