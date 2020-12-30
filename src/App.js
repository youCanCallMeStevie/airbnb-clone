import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomIndex from "./Components/BottomIndex/BottomIndex";
import LanguageModal from "./Components/LanguageModal/LanguageModal";
import HeroSection from "./Components/HeroSection/HeroSection"
import LocationIcons from "./Components/LocationIcons/LocationIcons";
import NavBarOnScroll from "./Components/NavBarOnScroll/NavBarOnScroll";
import SmallScreenNavbar from "./Components/SmallScreenNavbar/SmallScreenNavbar";


class App extends Component {
  state = {
    showModal: false,
    loading: true,
    error: false,
    selected: false,
  };
  handleModalToggle = async () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };


  selectedItem = (e) => {
    const element = e.currentTarget;
    element.classList.toggle("selectedItem")
}


handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}
  render() {
    const { showModal, loading } = this.state;

    return (
      <div>
        <SmallScreenNavbar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <NavBarOnScroll handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <HeroSection/>
        <LocationIcons/>
        <BottomIndex toggleModal={this.handleModalToggle}/>
        <LanguageModal
          showModal={showModal}
          toggleModal={this.handleModalToggle}
          selectedItem={this.selectedItem}
        />
      </div>
    );
  }
}

export default App;
