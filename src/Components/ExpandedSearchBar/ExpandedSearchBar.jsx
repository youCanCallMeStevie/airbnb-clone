import React, {useState } from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import "../ExpandedSearchBar/ExpandedSearchBar.css";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_logo_no_text.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";
import { Divider } from "@material-ui/core";


export default function ExpandedSearchBar({
  clicked,
  handleClick,
  toggleModal,
})

{

    const [search, setSearch] = useState({location:'Los Angeles', startDate:'yyyy-MM-dd', endDate:'yyyy-MM-dd', guests: 1});
const onSearchSubmit = () => {
    let url = `http://localhost:3000/locations?`
    for (let key in search) {
        if(key==='location' && search[key].includes(' ')) {
            search[key] = search[key].split(' ').join('%20')

        }
        url = url.concat(key + '='+search[key]+'&')
    }
    console.log(url)
 // const response =   await fetch(`?date=${search.date}&location..`)
}
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
            
            <Col md="auto" className="search-filter-item">
              <p>Location</p>
                <input
                  value={search.location}
                  type="text"
                  placeholder="Where are you going?"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />
            <Col md="auto" className="search-filter-item">
              <p>Check in </p>

              <input
                  value={search.startDate}
                  type="date"
                  placeholder="Add dates"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />

            <Col md="auto" className="search-filter-item">
              <p>Check out </p>
              <input
                  value={search.endDate}
                  type="date"
                  placeholder="Add dates"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Divider orientation="vertical" flexItem />

            <Col md="auto" className="search-filter-item">
              <p>Guests </p>
              <input
                  value={search.guests}
                  type="number"
                  placeholder="Add guests"
                  onChange={e => setSearch(e.target.value)}
                />
            </Col>
            <Col md="auto">
              <div className="expanded-search-background" onClick={onSearchSubmit}>
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
          
          </Row>
        </Row>
      </Col>
    </div>
  );
}
