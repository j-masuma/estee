import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../assets/img/Icon1.png";
import icon2 from "../assets/img/Icon2.png";
import icon3 from "../assets/img/Icon3.png";

import laimg from "../assets/img/long-Alpha-img.png";
const LognAlphaB = () => {
  return (
    <Container>
      <Row className="p-5">
        <Col lg={6} md={12}>
          <h1>
            Long <span className="abt-us">Alpha</span>
          </h1>
          <p>
            Long Alpha is a multi-factor equity quant PMS launched in 2018 that
            aims to consistently outperform the benchmark equity index while
            maintaining low volatility.
          </p>
          <Row>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={60} height={60} src={icon1} alt="" />
                <h5>~31.5%</h5>
                <p>Long Alpha vs ~15.5% BSE 500*</p>
              </div>
            </Col>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={60} height={60} src={icon2} alt="" />
                <h5>80+</h5>
                <p>Quant and Tech Professionals</p>
              </div>
            </Col>
            <Col lg={4} md={12} className="p-2">
              <div>
                <img width={60} height={60} src={icon3} alt="" />
                <h5>500 BSE</h5>
                <p>Lower Volatility than BSE Index</p>
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

export default LognAlphaB;
