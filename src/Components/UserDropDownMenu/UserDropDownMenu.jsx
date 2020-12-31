import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../UserDropDownMenu/UserDropDownMenu.css";

function UserDropDownMenu() {
  return (
    <div>
      <Card className="dropdown-container">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p className="dropdown-heading">Cras justo odio</p>
            <p className="dropdown-heading">Cras justo odio</p>
            <p className="dropdown-heading">Cras justo odio</p>
            <p className="dropdown-heading">Cras justo odio</p>
          </ListGroup.Item>
          <ListGroup.Item><p className="dropdown-subheading">Cras justo odio</p>
            <p className="dropdown-subheading">Cras justo odio</p>
            <p className="dropdown-subheading">Cras justo odio</p></ListGroup.Item>
          <ListGroup.Item><p className="dropdown-subheading">Cras justo odio</p>
            <p className="dropdown-subheading">Cras justo odio</p></ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserDropDownMenu;
