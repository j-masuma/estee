import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import lnp from "../assets/img/lngp.png";
import chart from "../assets/img/chart (1).png";
import tick from "../assets/img/tick-icon.png";
const LognAlphaB = () => {
  return (
    <div>
      <Container className="why-estee">
        <Row>
          <Col lg={6} md={12} sm={12} className="text-center alpha-BSE">
            <div className="p-5 ">
              <h1>Long Alpha-BSE Return Comparisons</h1>
              <img src={lnp} alt="" />
              <br />
              <img width={600} height={500} src={chart} alt="" />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="p-5">
              <h1 className="p-2">
                Long Alpha{" "}
                <span className="abt-us">-BSE Return Comparisons</span>
              </h1>
              <p className="p-2">
                Long Alpha is quantitatively managed strategy that implements a
                rule-based trading model to remove human subjectivity. It is a
                flexi cap fund that allocates amongst Large Cap, Mid Cap and
                Small Cap from the BSE 500 Investible universe. The quant
                strategy offers the following that differentiates itself.
              </p>
              <div className="abt-us">
                <div className="p-3">
                  <img width={20} height={20} src={tick} alt="" />{" "}
                  <span>Free from human bias</span>
                </div>
                <div className="p-3">
                  <img width={20} height={20} src={tick} alt="" />{" "}
                  <span>
                    Covers and processes wide breadth of data to construct
                    portfolio.
                  </span>
                </div>
                <div className="p-3">
                  <img width={20} height={20} src={tick} alt="" />{" "}
                  <span>
                    Uses 130+ micro strategies to create the model portfolio.
                  </span>
                </div>
                <div className="p-3">
                  <img width={20} height={20} src={tick} alt="" />{" "}
                  <span>
                    No Exit Load and No Entry Load- Exit when you want!
                  </span>
                </div>
              </div>
              <div className="p-4 pt-5">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LognAlphaB;
