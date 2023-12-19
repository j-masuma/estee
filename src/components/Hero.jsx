import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero from "../assets/img/hero-img.png";
import clienticon from "../assets/img/client-icon.png";
import assetsicon from "../assets/img/assets-icon.png";
import pioneericon from "../assets/img/payoneer-icon.png";
import Form from "react-bootstrap/Form";

const Hero = () => {
  return (
    <div className="mb-4 hero-section">
      <Container>
        <div className="text-center">
          <h1 className="p-4">
            Empowering your portfolio through quant investment
          </h1>
          <p className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>

          <button className=" button-styling">
            Get a Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
        </div>

        <img width={1425} height={663} src={hero} alt="Hero" />

        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="p-4 ">
              <div className="d-flex pb-2">
                <img width={60} height={60} src={clienticon} alt="" />{" "}
                <div>
                  <h5>8000+</h5>
                  <p>Trusted by 8000+ clients</p>
                </div>
              </div>
              <div className="d-flex pb-2">
                <img width={60} height={60} src={assetsicon} alt="" />{" "}
                <div>
                  <h5>1500+ Cr</h5>
                  <p>Assets under management</p>
                </div>
              </div>
              <div className="d-flex ">
                <img width={60} height={60} src={pioneericon} alt="" />{" "}
                <div>
                  <h5>Pioneer</h5>
                  <p>Quant investment in India</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="card shadow p-5 m-4">
              <h1 className="text-center">Looking for Investment Solutions?</h1>
              <Form className="row">
                <Form.Group
                  className="mb-3 col col-lg-6 col-md-12 col-sm-12"
                  controlId="formBasicName"
                >
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    className="p-3"
                    type="email"
                    placeholder="John"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col col-lg-6 col-md-12 col-sm-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    className="p-3"
                    type="email"
                    placeholder="john@email.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col col-lg-6 col-md-12 col-sm-12"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Mobile No. *</Form.Label>
                  <Form.Control
                    className="p-3"
                    type="password"
                    placeholder="00 (123) 456 78 90"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col col-lg-6 col-md-12 col-sm-12"
                  controlId="formBasicSelect"
                >
                  <Form.Label>Looking to Invest (in Rs.)</Form.Label>
                  <Form.Select className="p-3">
                    <option>Small select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. As per SEBI guide Lines, minimum investment required is of ₹50 Lakhs."
                  />
                </Form.Group>

                <button className=" button-styling">
                  REQUEST CALLBACK
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
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
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
