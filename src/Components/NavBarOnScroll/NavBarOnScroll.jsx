import React from "react";
import { Navbar } from "react-bootstrap";
import "../NavBarOnScroll/NavBarOnScroll.css";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_solo_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";
import ExpandedSearchBar from "../ExpandedSearchBar/ExpandedSearchBar";

export default function NavBarOnScroll({
  handleChange,
  handleSubmit,
  showSearch,
  expandSearch,
  clicked,
  handleClick,
  toggleModal
}) {
  return (
    <div className="navbar-onscroll-container">
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src={PinkLogo}
            width="40"
            height="40"
            className="d-inline-block ml-3"
            alt="AirBnB logo"
          />
        </Navbar.Brand>
        <div className="navbar-item-wrap">
          <div className="searchbox-button" onClick={expandSearch}>
            {showSearch ? <ExpandedSearchBar /> : null}
            <p>
              Start your search
              <span className="search-background">
                <SearchIcon />
              </span>
            </p>
          </div>
          <div className="hosting-wrapper">
            <span><p>Switch to hosting</p></span>
            <span className="choose-language" onClick={() => toggleModal()}>
 <LanguageIcon /> </span>
          </div>
          <div onClick={handleClick}>
            {clicked ? <UserDropDownMenu /> : null}
          <div className="user-hamburger-wrapper" >
            <MenuIcon />
            <PersonOutlineIcon />
          </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
