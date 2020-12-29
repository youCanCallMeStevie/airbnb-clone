import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomIndex from "./Components/BottomIndex/BottomIndex";
import LanguageModal from "./Components/LanguageModal/LanguageModal";
import HeroSection from "./Components/HeroSection/HeroSection"
import LocationIcons from "./Components/LocationIcons/LocationIcons";

class App extends Component {
  state = {
    showModal: false,
    loading: true,
    error: false,
  };
  handleModalToggle = async () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    const { showModal, loading } = this.state;

    return (
      <div>
        <HeroSection/>
        <LocationIcons/>
        <BottomIndex toggleModal={this.handleModalToggle}/>
        <LanguageModal
          showModal={showModal}
          toggleModal={this.handleModalToggle}
        />
      </div>
    );
  }
}

export default App;
