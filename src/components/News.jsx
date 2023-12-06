import React from "react";
import et from "../assets/img/ET.png";
import mint from "../assets/img/MINT.png";
import { Col, Container, Row } from "react-bootstrap";
const News = () => {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h1 className="p-2">
            Meet <span className="abt-us">Estee team</span>
          </h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="founders shadow p-4 m-4">
                <img
                  className="mt-4 mb-3"
                  width={130}
                  height={130}
                  src={et}
                  alt=""
                />
                <h5>
                  Huge wealth creation opportunity in midcap space over next 5
                  years
                </h5>
                <a className="learn-more" href="/home">
                  Learn More
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="founders shadow p-4 m-4">
                <img
                  className="mt-4 mb-3"
                  width={130}
                  height={130}
                  src={mint}
                  alt=""
                />
                <h5>
                  Huge wealth creation opportunity in midcap space over next 5
                  years
                </h5>
                <a className="learn-more" href="/home">
                  Learn More
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="founders shadow p-4 m-4">
                <img
                  className="mt-4 mb-3"
                  width={130}
                  height={130}
                  src={et}
                  alt=""
                />
                <h5>
                  Huge wealth creation opportunity in midcap space over next 5
                  years
                </h5>
                <a className="learn-more" href="/home">
                  Learn More
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default News;
