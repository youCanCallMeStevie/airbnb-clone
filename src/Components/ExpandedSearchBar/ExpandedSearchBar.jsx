import React from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import "../ExpandedSearchBar/ExpandedSearchBar.css";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_solo_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";

export default function ExpandedSearchBar(
  {
    //   handleChange,
    //   handleSubmit,
    //   clicked,
    //   handleClick,
    //   toggleModal,
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
                //   onClick={() => toggleModal()}
              >
                <LanguageIcon />{" "}
              </div>
              <div
              //   onClick={handleClick}
              >
                {/* {clicked ? <UserDropDownMenu /> : null} */}
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
          <Row className="mt-2">
            <div className="search-filter-box">
              <Row>
                <Col>
                  <p>Location </p>
                </Col>
                <Col>
                  <p>Check in </p>
                </Col>
                <Col>
                  <p>Check out </p>
                </Col>
                <Col>
                  <p>Guests </p>
                </Col>
                <Col>
                  <span className="search-background">
                    <SearchIcon />
                  </span>
                </Col>
              </Row>
            </div>
          </Row>
        </Col>
    </div>
  );
}
