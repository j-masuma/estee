import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../assets/img/iicon1.png";
import icon2 from "../assets/img/iicon2.png";
import icon3 from "../assets/img/iicon3.png";

import laimg from "../assets/img/ialphaimg.png";
const IAlpha = () => {
  return (
    <Container>
      <Row className="pt-5 pb-5">
        <Col lg={6} md={12}>
          <h1>
            I <span className="abt-us">Alpha</span>
          </h1>
          <p>
            I-Alpha is Estee’s Market Neutral Arbitrage product which aims to
            deliver consistent returns while maintaining nearly zero market
            exposure. Estee’s algorithm identifies mispricing between various
            market instruments at any given point of time and takes hedged
            positions to capture the pricing differences. The strategy generates
            stable and consistent returns without taking any directional bets.
            Estee employs a 3 tier risk management system at a Fund level,
            Strategy Level and Operational level.
          </p>
          <Row>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={65} height={65} src={icon1} alt="" />
                <h5>~11.7%</h5>
                <p>CAGR</p>
              </div>
            </Col>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={65} height={65} src={icon2} alt="" />
                <h5>ZERO</h5>
                <p>Negative months since Inception</p>
              </div>
            </Col>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={65} height={65} src={icon3} alt="" />
                <h5>No</h5>
                <p>Entry load or Exit Load</p>
              </div>
            </Col>
          </Row>

          <button className=" button-styling">
            Download Fact Sheet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
        </Col>
        <Col lg={6} md={12}>
          <div>
            <img width={650} height={550} src={laimg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IAlpha;
