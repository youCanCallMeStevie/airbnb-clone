import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomIndex from "./Components/BottomIndex/BottomIndex";
import LanguageModal from "./Components/LanguageModal/LanguageModal";
import HeroSection from "./Components/HeroSection/HeroSection"
import LocationIcons from "./Components/LocationIcons/LocationIcons";
import NavBarOnScroll from "./Components/NavBarOnScroll/NavBarOnScroll";
import SmallScreenNavbar from "./Components/SmallScreenNavbar/SmallScreenNavbar";
import TypesOfListings from "./Components/TypesOfListings/TypesOfListings";
import HostsBlock from "./Components/HostsBlock/HostsBlock";
import OnlineExpHome from "./Components/OnlineExpHome/OnlineExpHome";
import Testing from "./Components/Testing";



class App extends Component {
  state = {
    showModal: false,
    loading: true,
    error: false,
    selected: false,
    clicked: false,
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
  alert('Thank you for posting your accomidation');
  event.preventDefault();
}

handleClick= async () => {
  this.setState({
  clicked: !this.state.clicked
});
}
  render() {
    const {  showModal,
      loading,
      error,
      selected,
      clicked } = this.state;

    return (
      <div>
        <SmallScreenNavbar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <NavBarOnScroll handleChange={this.handleChange} handleSubmit={this.handleSubmit} clicked={clicked}
          handleClick={this.handleClick} toggleModal={this.handleModalToggle}/>
        <HeroSection/>
        <LocationIcons/>
        <TypesOfListings/>
        <OnlineExpHome/>
        <HostsBlock/>
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
