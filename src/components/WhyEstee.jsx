import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whyimg from "../assets/img/why-img.png";
import tick from "../assets/img/tick-icon.png";
const WhyEstee = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="p-2">
            <img width={650} height={650} src={whyimg} alt="Why Us" />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="p-5">
            <h1 className="p-2">
              Why <span className="abt-us">Estee?</span>
            </h1>
            <p className="p-2">
              Estee is a quant and analytics driven firm that was founded in
              2008 when algorithmic trading was permitted by SEBI in India.
            </p>
            <p className="p-2">
              {" "}
              Estee mastered the art of applying quant to investment approach
              and pioneered algorithmic investment products.
            </p>
            <div className="abt-us">
              <div className="p-3">
                <img width={20} height={20} src={tick} alt="" />{" "}
                <span>Pioneers in quant investing in India</span>
              </div>
              <div className="p-3">
                <img width={20} height={20} src={tick} alt="" />{" "}
                <span>Strong performance track record</span>
              </div>
              <div className="p-3">
                <img width={20} height={20} src={tick} alt="" />{" "}
                <span>
                  Trusted by 2000+ Clients-(PMS & Investment advisory)
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyEstee;
