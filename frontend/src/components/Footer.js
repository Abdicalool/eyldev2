import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row
          style={{
            width: "100%",
            marginLeft: 0,
          }}
        >
          <div className="footer-section-1"></div>
          <div className="footer-section-2">
            <span>Copyright &copy; EylShop</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
