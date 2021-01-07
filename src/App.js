import React, { Component, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomIndex from "./Components/BottomIndex/BottomIndex";
import LanguageModal from "./Components/LanguageModal/LanguageModal";
import HeroSection from "./Components/HeroSection/HeroSection";
import LocationIcons from "./Components/LocationIcons/LocationIcons";
import NavBarOnScroll from "./Components/NavBarOnScroll/NavBarOnScroll";
import SmallScreenNavbar from "./Components/SmallScreenNavbar/SmallScreenNavbar";
import TypesOfListings from "./Components/TypesOfListings/TypesOfListings";
import HostsBlock from "./Components/HostsBlock/HostsBlock";
import OnlineExpHome from "./Components/OnlineExpHome/OnlineExpHome";
import AddDatesForPrices from "./Components/AddDatesForPrices/AddDatesForPrices";
import ListingPage from "./Components/ListingPage/ListingPage";

class App extends Component {
  state = {
    showModal: false,
    loading: true,
    error: false,
    selected: false,
    clicked: false,
    showSearch: false,
  };
  handleModalToggle = async () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  selectedItem = e => {
    const element = e.currentTarget;
    element.classList.toggle("selectedItem");
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Thank you for posting your accomidation");
    event.preventDefault();
  }

  handleClick = async () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  expandSearch = async () => {
    this.setState({
      showSearch:true,
    });
  };

  expandedSearchBoxOnScroll = () => {
    let currentScrollPos = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const searchBox = document.querySelector(".expanded-navbar-container");
    if (searchBox) {
      if (currentScrollPos <= maxScroll) {
        //searchBox?.classList.add("d-none");
        this.setState({
          showSearch:false,
        });
      } else {
       // searchBox?.classList.remove("d-none");
        this.setState({
          showSearch:false,
        });
      }
    }
  };

  navBarOnScroll = () => {
    let currentScrollPos = window.pageYOffset;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const topbar = document.querySelector(".navbar-onscroll-container");
    if (topbar) {
      if (currentScrollPos < 200 && currentScrollPos <= maxScroll) {
        topbar?.classList.add("d-none");
      } else {
        topbar?.classList.remove("d-none");
      }
    }
  };

  handleOnScroll = () => {
    if (window) {
      window.onscroll = () => {
        this.navBarOnScroll();
        this.expandedSearchBoxOnScroll();
      };
    }
  };
  componentDidMount() {
    console.log(this.state);
    this.handleOnScroll();
  }

  render() {
    const {
      showModal,
      showSearch,
      loading,
      error,
      selected,
      clicked,
    } = this.state;

    return (
      <div>
        <SmallScreenNavbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      
        <NavBarOnScroll
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          showSearch={showSearch}
          expandSearch={this.expandSearch}
          clicked={clicked}
          handleClick={this.handleClick}
          toggleModal={this.handleModalToggle}
          hideExpandedSearch={this.handleOnScroll}
        />
        <HeroSection />
        <LocationIcons />
        <TypesOfListings />
        <OnlineExpHome />
        <HostsBlock />
        <ListingPage/>
        <BottomIndex toggleModal={this.handleModalToggle} />
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
