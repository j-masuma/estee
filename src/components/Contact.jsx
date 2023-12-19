import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import lady from "../assets/img/pretty-smiling-lady-transperent-glasses-wide-smile-white-shirt-with-headset-isolated-white-PhotoRoom 1.png";
function Contact() {
  return (
    <div>
      <Container className="contact mb-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className=" p-5 m-4">
              <h1 className="p-3">
                Request <span className="abt-us">CallBack</span>
              </h1>
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
                <Form.Group className="mb-5" controlId="formBasicCheckbox">
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
          <Col lg={6} md={6} sm={12}>
            <img src={lady} alt="Pretty Lady" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
