import React from "react";
import { Container } from "react-bootstrap";
import technology from "../assets/img/tech-img.png";
import team from "../assets/img/team-img.png";
import data from "../assets/img/data-img.png";
const AddingAlpha = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center p-4">
          Adding Alpha through{" "}
          <span className="abt-us">Estee’s 3 fundamental advantages</span>
        </h1>
        <div className="row pt-4 pb-4">
          <div className="col col-lg-4 col-md-12 text-center">
            <div className="card rounded-5">
              <img src={technology} alt="Technology" />
              <h4 className="p-4 ">Technology</h4>
            </div>
          </div>

          <div className="col col-lg-4 col-md-12 text-center">
            <div className="card rounded-5">
              <img src={team} alt="Technology" />
              <h4 className="p-4 ">Team</h4>
            </div>
          </div>

          <div className="col col-lg-4 col-md-12 text-center">
            <div className="card rounded-5">
              <img src={data} alt="Technology" />
              <h4 className="p-4 ">Data</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddingAlpha;
