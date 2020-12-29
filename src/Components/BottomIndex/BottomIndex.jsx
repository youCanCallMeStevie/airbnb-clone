import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../BottomIndex/BottomIndex.css";

function BottomIndex({ toggleModal }) {
  return (
    <div className="footer-items">
      {/* Footer for large devices */}
      <Container className="d-none d-lg-block ">
        <Row>
          <Col>
            <Row className="footer-header">About</Row>
            <Row>How Airbnb works</Row>
            <Row>Newsroom</Row>
            <Row>Investors</Row>
            <Row>Airbnb Plus</Row>
            <Row>Airbnb Luxe</Row>
            <Row>HotelTonight</Row>
            <Row>Airbnb for Work</Row>
            <Row>Olympics</Row>
            <Row>Careers</Row>
          </Col>
          <Col>
            <Row className="footer-header">Community</Row>
            <Row>Diversity & Belonging</Row>
            <Row>Accessibility</Row>
            <Row>Airbnb Associates</Row>
            <Row>Frontline Stays</Row>
            <Row>Invite Friends</Row>
            <Row>Airbnb.org</Row>
          </Col>
          <Col>
            <Row className="footer-header">Host</Row>
            <Row>Host your home</Row>
            <Row>Host an Online Experience</Row>
            <Row>Host an Experience</Row>
            <Row>Responsibile hosting</Row>
            <Row>Resource Centre</Row>
            <Row>Community Centre</Row>
          </Col>
          <Col>
            <Row className="footer-header">Support</Row>
            <Row>Our COVID-19 Response</Row>
            <Row>Help Centre</Row>
            <Row>Cancellation options</Row>
            <Row>Neighbourhood Support</Row>
            <Row>Trust & Safety</Row>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col xs={8}>
            <Row>© 2020 Airbnb, Inc. All rights reserved</Row>
            <Row>
              ·Privacy·Terms·Sitemap·UK Modern Slavery Act·Company details
            </Row>
          </Col>
          <Col>
            <Row>
              <span className="choose-language" onClick={() => toggleModal()}>
                <LanguageIcon
                  style={{ fontSize: "18px", marginRight: "8px" }}
                />{" "}
                English(GB)
              </span>
              £ GBP{" "}
              <FacebookIcon
                style={{
                  fontSize: "18px",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              />
              <TwitterIcon style={{ fontSize: "18px", marginRight: "8px" }} />
              <InstagramIcon style={{ fontSize: "18px" }} />
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Footer for medium devices */}
      <Container className="d-none d-sm-block d-lg-none">
        <Col className="">
          <Row className="footer-header">About</Row>
          <Row>
            <Col>How Airbnb works</Col>
            <Col>Newsroom</Col>
            <Col>Investors</Col>
          </Row>
          <Row>
            <Col>Airbnb Plus</Col>
            <Col>Airbnb Luxe</Col>
            <Col>Hotel Tonight</Col>
          </Row>

          <Row>
            <Col>Airbnb for Work</Col>
            <Col>Olympics</Col>
            <Col>Careers</Col>
          </Row>
          <hr></hr>
          <Row className="footer-header">Community</Row>
          <Row>
            <Col>Diversity & Belonging</Col>
            <Col>Accessibility</Col>
            <Col>Airbnb Associates</Col>
          </Row>
          <Row>
            <Col>Frontline Stays</Col>
            <Col>Invite Friends</Col>
            <Col>Airbnb.org</Col>
          </Row>
          <hr></hr>
          <Row className="footer-header">Host</Row>
          <Row>
            <Col>Host your home</Col>
            <Col>Host an Online Experience</Col>
            <Col>Host an Experience</Col>
          </Row>
          <Row>
            <Col>Responsibile hosting</Col>
            <Col>Resource Centre</Col>
            <Col>Community Centre</Col>
          </Row>
          <hr></hr>
          <Row className="footer-header">Support</Row>
          <Row>
            <Col>Our COVID-19 Response</Col>
            <Col>Help Centre</Col>
            <Col>Cancellation options</Col>
          </Row>
          <Row>
            <Col>Neighbourhood Support</Col>
            <Col>Trust & Safety</Col>
            <Col></Col>
          </Row>
        </Col>
        <hr></hr>
        <Col className="">
          <Row style={{ justifyContent: "center" }}>
            <span className="choose-language" onClick={() => toggleModal()}>
              <LanguageIcon style={{ fontSize: "18px", marginRight: "8px" }} />{" "}
              English(GB)
            </span>
            £ GBP{" "}
            <FacebookIcon
              style={{
                fontSize: "18px",
                marginRight: "8px",
                marginLeft: "8px",
              }}
            />
            <TwitterIcon style={{ fontSize: "18px", marginRight: "8px" }} />
            <InstagramIcon style={{ fontSize: "18px" }} />{" "}
          </Row>
          <Row style={{ justifyContent: "center" }}>
            © 2020 Airbnb, Inc. All rights reserved
          </Row>
          <Row style={{ justifyContent: "center" }}>
            ·Privacy·Terms·Sitemap·UK Modern Slavery Act·Company details
          </Row>
        </Col>
      </Container>
      {/* Footer for small devices */}
      <Container className="d-block d-sm-none">
        <Col>
          <Col>
            <Row className="footer-header">About</Row>
            <Row>How Airbnb works</Row>
            <Row>Newsroom</Row>
            <Row>Investors</Row>
            <Row>Airbnb Plus</Row>
            <Row>Airbnb Luxe</Row>
            <Row>HotelTonight</Row>
            <Row>Airbnb for Work</Row>
            <Row>Olympics</Row>
            <Row>Careers</Row>
          </Col>
          <hr></hr>
          <Col>
            <Row className="footer-header">Community</Row>
            <Row>Diversity & Belonging</Row>
            <Row>Accessibility</Row>
            <Row>Airbnb Associates</Row>
            <Row>Frontline Stays</Row>
            <Row>Invite Friends</Row>
            <Row>Airbnb.org</Row>
          </Col>
          <hr></hr>

          <Col>
            <Row className="footer-header">Host</Row>
            <Row>Host your home</Row>
            <Row>Host an Online Experience</Row>
            <Row>Host an Experience</Row>
            <Row>Responsibile hosting</Row>
            <Row>Resource Centre</Row>
            <Row>Community Centre</Row>
          </Col>
          <hr></hr>

          <Col>
            <Row className="footer-header">Support</Row>
            <Row>Our COVID-19 Response</Row>
            <Row>Help Centre</Row>
            <Row>Cancellation options</Row>
            <Row>Neighbourhood Support</Row>
            <Row>Trust & Safety</Row>
          </Col>
        </Col>
        <hr></hr>
        <Col>
          <Row>
            <span className="choose-language" onClick={() => toggleModal()}>
              <LanguageIcon style={{ fontSize: "18px", marginRight: "8px" }} />{" "}
              English(GB)
            </span>{" "}
            £ GBP{" "}
            <FacebookIcon
              style={{
                fontSize: "18px",
                marginRight: "8px",
                marginLeft: "8px",
              }}
            />
            <TwitterIcon style={{ fontSize: "18px", marginRight: "8px" }} />
            <InstagramIcon style={{ fontSize: "18px" }} />{" "}
          </Row>
          <Row>© 2020 Airbnb, Inc. All rights reserved</Row>
          <Row>
            ·Privacy·Terms·Sitemap·UK Modern Slavery Act·Company details
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default BottomIndex;
