import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import omletteImage from "../../Assets/Images/image-omelette.jpeg";

function Header() {
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center align-items-center m-0 text-center">
        <Col xs={12} className="p-0">
          <div className="image-container p-0 m-0 p-md-0">
            <img
              src={omletteImage}
              alt="Omelette"
              className="img-fluid full-width-image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
