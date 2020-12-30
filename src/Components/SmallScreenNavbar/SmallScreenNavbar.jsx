import React from "react";
import { Form } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import "../SmallScreenNavbar/SmallScreenNavbar.css";

export default function SmallScreenNavbar({handleChange, handleSubmit}) {
  return (
    <div className="small-navbar-container">
      <div className="searchbox-area">
          <SearchIcon fontSize="large"/>
          <p>Where are you going?</p>
        {/* <Form.Group controlId="searchLocation" >
          <Form.Control type="text" placeholder="Where are you going?" />
        </Form.Group> */}
      </div>
    </div>
  );
}
