import { Col, Row } from "react-bootstrap";
import mail from "../assets/img/mail-icon.png";
import call from "../assets/img/call.png";
import logo from "../assets/img/f-Logo.png";
import fb from "../assets/img/fb.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";
import linkedIn from "../assets/img/linkedIn.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-p1 p-2">
        <div className="row m-5">
          <div className="col col-lg-5 col-sm-12 col-md-12">
            <h1 className="text-white p-4">
              Empowering your portfolio through quant investment
            </h1>
          </div>
          <div className="col col-lg-2 col-sm-0 col-md-0"></div>

          <div className="col col-lg-5 col-sm-12 col-md-12 d-flex justify-content-between align-items-center">
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="p-2 d-flex">
                  <img width={25} height={25} src={mail} alt="Mail" />
                  <span className="text-white">PMS@esteeadvisors.com</span>
                </div>
              </Col>

              <Col lg={6} md={12} sm={12}>
                <button className=" button-styling">
                  <img width={20} height={20} src={call} alt="Call" />{" "}
                  +91-8700913486
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="footer-p2 p-4">
        <div className=" d-flex justify-content-between align-items-center p-2 m-5">
          <div>
            <img width={120} height={60} src={logo} alt="Logo" />
          </div>
          <div>
            <p className="text-white">
              privacy policy | Disclaimer and legal Terms | Disclosures
            </p>
          </div>
          <div className="">
            <a href="/home">
              <img src={fb} alt="Facebook" />
            </a>{" "}
            <a href="/home">
              <img src={instagram} alt="Instagram" />
            </a>{" "}
            <a href="/home">
              <img src={twitter} alt="Twitter" />
            </a>{" "}
            <a href="/home">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
