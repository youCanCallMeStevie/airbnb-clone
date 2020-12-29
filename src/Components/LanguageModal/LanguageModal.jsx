import React from "react";
import { Modal, Col, Row } from "react-bootstrap";
import "../LanguageModal/LanguageModal.css";

function LanguageModal({ toggleModal, showModal }) {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={toggleModal}
        // backdrop="static"
        // keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="language-modal">
          <h2>Suggested languge and region</h2>
          <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United States</div>
              </Col>
              </Row>
          <h2>Choose a language and region</h2>
          <div >
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells " tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells"  tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
              <Col xs={6} md={3} className="language-cells" tabindex="-1">
                <div className="language">English</div>
                <div className="country">United Kingdom</div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LanguageModal;
