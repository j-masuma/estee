import React from "react";
import Button from "react-bootstrap/Button";

import call from "../assets/img/call.png";
import Navbar from "react-bootstrap/Navbar";
import mail from "../assets/img/mail-icon.png";
import logo from "../assets/img/Logo.png";
const Header = () => {
  return (
    <Navbar expand="lg" className="m-5 p-2">
      <Navbar.Brand href="#home">
        <img width={120} height={60} src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text></Navbar.Text>
        <div className="p-2">
          <img width={25} height={25} src={mail} alt="Mail" />
          <span className=" p-2">PMS@esteeadvisors.com</span>
        </div>
        <Button variant="danger">
          <img width={20} height={20} src={call} alt="Call" /> +91-8700913486
        </Button>{" "}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
