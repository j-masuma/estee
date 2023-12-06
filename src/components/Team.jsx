import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import f1 from "../assets/img/founder1.png";
import f2 from "../assets/img/founder2.png";
function Team() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h1 className="p-2">
            Meet <span className="abt-us">Estee team</span>
          </h1>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="founders shadow p-4 m-4">
                <img
                  className="mt-4 mb-3"
                  width={130}
                  height={130}
                  src={f1}
                  alt=""
                />
                <h3>Mr. Sandeep Tyagi</h3>
                <p>Founder and CEO</p>
                <p className="p-4">
                  Mr. Sandeep Tyagi has 30+ years of experience in portfolio
                  management, analytics, and consulting. He pursued Bachelors in
                  Technology from IIT Delhi (1986-90) and MBA from Columbia
                  Business School(1993-94). He is also a CQF from London. Prior
                  to Estee, Mr. Tyagi founded a consulting and analytics firm -
                  Inductis - in 2000, which was later acquired by EXL.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="founders shadow p-4 m-4">
                <img
                  className="mt-4 mb-3"
                  width={130}
                  height={130}
                  src={f2}
                  alt=""
                />
                <h3>Vivek Sharma</h3>
                <p>Chair man</p>
                <p className="p-4">
                  Vivek Has been in trading and investing field for 20 years
                  now. He is a graduate from IIT Kharagpur. He has traded
                  international markets for over 10 years with Futures First,
                  where we setup their Energy Trading Desk. He has trained 100’s
                  of successful traders during his time with Futures First. He
                  currently runs a successful smallcase portfolio which has
                  generated 384.5% return vs 122.33% in Index since launch.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Team;
