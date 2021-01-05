import React, {useState, useRef } from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import "../ExpandedSearchBar/ExpandedSearchBar.css";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_logo_no_text.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";
import { Divider } from "@material-ui/core";
import useOutsideClick from "../../Utilites/Hooks/ClickOutside";


export default function ExpandedSearchBar({
  clicked,
  handleClick,
  toggleModal,
})

{

    const [searchActive, setSearchActive] = useState(false);
    const [search, setSearch] = useState("");

    const ref = useRef();

    useOutsideClick(ref, () => {
        if (searchActive) setSearchActive(true);
      });

    const submit = e => {
      e.preventDefault();
      alert(`We're having a look for ${search}`);
      setSearch("");
    };
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
          <div className="choose-language" onClick={() => toggleModal()}>
            <LanguageIcon />{" "}
          </div>
          <div onClick={handleClick}>
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
              <form>
            <Col md="auto" className="search-filter-item">
              <p>Location</p>
                <input
                  value={search}
                  type="text"
                  placeholder="Where are you going?"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />
            <Col md="auto" className="search-filter-item">
              <p>Check in </p>

              <input
                  value={search}
                  type="date"
                  placeholder="Add dates"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />

            <Col md="auto" className="search-filter-item">
              <p>Check out </p>
              <input
                  value={search}
                  type="date"
                  placeholder="Add dates"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />

            <Col md="auto" className="search-filter-item">
              <p>Guests </p>
              <input
                  value={search}
                  type="number"
                  placeholder="Add guests"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Col md="auto">
              <div className="expanded-search-background">
                <span>
                  <SearchIcon />
                </span>
                <span>
                  <p style={{ paddingLeft: "2px", marginBottom: "10px" }}>
                    Search
                  </p>
                </span>
              </div>
            </Col>
            </form>
          </Row>
        </Row>
      </Col>
    </div>
  );
}
