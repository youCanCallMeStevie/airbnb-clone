import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Icon1 from "../../Assets/Cartoons/airbnb_icon1.png";
import Icon2 from "../../Assets/Cartoons/airbnb_icon2.png";
import Icon3 from "../../Assets/Cartoons/airbnb_icon3.png";
import Icon4 from "../../Assets/Cartoons/airbnb_icon4.png";
import "../LocationIcons/LocationIcons.css";

function LocationIcons() {
  return (
    <div>
      <Container fluid>
        <Row style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <Col xs={12} sm={6} md={3}>
            <Row className="suggested-cells">
              <Image src={Icon1} className="location-icons" />
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">2-hour drive</Row>
              </Col>
            </Row>
            <Row className="suggested-cells">
              <Image src={Icon3} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">1.5-hour drive</Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {" "}
            <Row className="suggested-cells">
              <Image src={Icon2} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">30-min drive</Row>
              </Col>
            </Row>
            <Row className="suggested-cells">
              <Image src={Icon4} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">4-hour drive</Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {" "}
            <Row className="suggested-cells">
              <Image src={Icon2} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">2-hour drive</Row>
              </Col>
            </Row>
            <Row className="suggested-cells">
              <Image src={Icon1} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">1-hour drive</Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {" "}
            <Row className="suggested-cells">
              <Image src={Icon4} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">2.5-hour drive</Row>
              </Col>
            </Row>
            <Row className="suggested-cells">
              {" "}
              <Image src={Icon3} className="location-icons" />{" "}
              <Col style={{ marginLeft: "10px" }}>
                <Row className="destination">Place Name</Row>
                <Row className="drive-time">2-hour drive</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LocationIcons;
