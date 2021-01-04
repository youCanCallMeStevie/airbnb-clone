import React from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import "../ExpandedSearchBar/ExpandedSearchBar.css";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_logo_no_text.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";
import { Divider } from "@material-ui/core";

export default function ExpandedSearchBar(
  {
      handleChange,
      handleSubmit,
      clicked,
      handleClick,
      toggleModal,
  }
) {
  return (
    <div className="expanded-navbar-container">
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
            <div
              className="expanded-navbar-item-wrap"
              style={{ marginRight: "5px", marginTop: "3px" }}
            >
              <div>
                <p>Switch to hosting</p>
              </div>
              <div
                className="choose-language"
                  onClick={() => toggleModal()}
              >
                <LanguageIcon />{" "}
              </div>
              <div
                onClick={handleClick}
              >
                {clicked ? <UserDropDownMenu /> : null}
                <div className="search-expanded-user-hamburger-wrapper">
                  <MenuIcon />
                  <PersonOutlineIcon />
                </div>
              </div>
            </div>
          </Navbar>
          <Col>

          <Row>
            <div className="expanded-navbar-item-wrap">
              <div className="search-menu-title">
                <p>Places to stay</p>
              </div>
              <div className="search-menu-title">
                <p>Experiences</p>
              </div>
              <div className="search-menu-title">
                <p>Online experiences</p>
              </div>
            </div>
          </Row>
          <Row className="mt-2 search-filter-box">
            
              <Row className="search-filter-items">
                <Col md="auto" className="search-filter-item">
                <p>Location</p>

                <p className="text-muted" style={{fontWeight:"400"}}>Where are you going?</p>

                </Col>
                <Divider orientation="vertical" flexItem />
                <Col md="auto" className="search-filter-item">
                  <p>Check in </p>
                  <p className="text-muted" style={{fontWeight:"400"}}>Add dates</p>
                </Col>
                <Divider orientation="vertical" flexItem />

                <Col md="auto" className="search-filter-item">
                  <p>Check out </p>
                  <p className="text-muted" style={{fontWeight:"400"}}>Add dates</p>

                </Col>
                <Divider orientation="vertical" flexItem />

                <Col md="auto" className="search-filter-item">
                  <p>Guests </p>
                  <p className="text-muted" style={{fontWeight:"400"}}>Add guests</p>

                </Col>
                <Col md="auto">
                  <div className="expanded-search-background">
                    <span><SearchIcon /></span><span><p style={{paddingLeft:"2px", marginBottom:"10px"}}>Search</p></span>
                  </div>
                </Col>
              </Row>
           
          </Row>
        </Col>
    </div>
  );
}
