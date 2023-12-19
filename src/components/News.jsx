import React from "react";
import et from "../assets/img/ET.png";
import mint from "../assets/img/MINT.png";

import grey from "../assets/img/greyimg.png";
const News = () => {
  return (
    <div className="p-5">
      <div className="text-center p-4 m-4 heading">
        <h1 className="text-center ">
          Adding Alpha through{" "}
          <span className="text-color ">Estee’s 3 fundamental advantages</span>
        </h1>
      </div>
      <div className="row d-flex justify-content-between ">
        <div className="col col-lg-4 col-md-12 col-sm-12 text-center text-center p-2">
          <div>
            <img src={grey} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={et} alt="Technology" />
          </div>
          <div className="p-4">
            <h5 className="p-4 m-4">
              Huge wealth creation opportunity in midcap space over next 5 years{" "}
            </h5>{" "}
            <a className="learn-more" href="/home">
              Learn More{" "}
            </a>
          </div>
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12 text-center text-center p-2">
          <div>
            <img src={grey} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={mint} alt="Team" />
          </div>
          <div className="p-4">
            <h5 className="p-4 m-4">
              Huge wealth creation opportunity in midcap space over next 5 years{" "}
            </h5>{" "}
            <a className="learn-more" href="/home">
              Learn More{" "}
            </a>
          </div>
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12 text-center text-center p-2">
          <div>
            <img src={grey} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={et} alt="data" />
          </div>
          <div className="p-4">
            <h5 className="p-4 m-4">
              Huge wealth creation opportunity in midcap space over next 5 years{" "}
            </h5>{" "}
            <a className="learn-more" href="/home">
              Learn More{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
