import React from "react";
import { Modal, Col, Row } from "react-bootstrap";
import PinkLogo from "../../Assets/AirBnb-Logos/airbnb_pink_logo_no_text.png";
import "../LanguageModal/LanguageModal.css";

function LanguageModal({ toggleModal, showModal, selectedItem }) {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={toggleModal}
        // backdrop="static"
        // keyboard={false}
        contentClassName="custom-modal-style"
        
      >
        <Modal.Header closeButton>
          <Modal.Title><img
            src={PinkLogo}
            width="40"
            height="40"
            className="d-inline-block ml-3"
            alt="AirBnB logo"
          /></Modal.Title>
        </Modal.Header>
        <Modal.Body className="language-modal">
          <h3>Suggested languge and region</h3>
          <Row>
              <Col xs={6} md={3} className="language-cells">
                <div className="language">English</div>
                <div className="country">United States</div>
              </Col>
              </Row>
          <h3>Choose a language and region</h3>
          <div >
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="en">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="eng">English</div>
                <div className="country">United States</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="zh">汉语</div>
                <div className="country">China</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="da">Dansk</div>
                <div className="country">Danish</div>
              </Col>
            </Row>
            <Row>
            <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="fi">Suomi</div>
                <div className="country">Finland</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="fr">Français</div>
                <div className="country">France</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="ka">ქართული</div>
                <div className="country">Georgia</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language" value="el">ελληνικά</div>
                <div className="country">Greece</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="hi">हिन्दी</div>
                <div className="country">India (Hindi)</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="it">Italiano</div>
                <div className="country">Italy</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="ja">日本語</div>
                <div className="country">Japan</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="ko">한국어</div>
                <div className="country">South Korea</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="pl">Język polski</div>
                <div className="country">Poland</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="pt">Português</div>
                <div className="country">Portugual</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="sv">Svenska</div>
                <div className="country">Sweden</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="bo">བོད་ཡིག</div>
                <div className="country">Tibet</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="tr">Türkçe</div>
                <div className="country">Turkey</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="uk">Українська</div>
                <div className="country">Ukraine</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="vi">Tiếng Việt</div>
                <div className="country">Vietnam</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language" value="cy">Cymraeg</div>
                <div className="country">Wales</div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LanguageModal;
