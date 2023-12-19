// import React from "react";
// import { Container } from "react-bootstrap";
// import technology from "../assets/img/tech-img.png";
// import team from "../assets/img/team-img.png";
// import data from "../assets/img/data-img.png";
// const AddingAlpha = () => {
//   return (
//     <div>
//       <Container>
//         <h1 className="text-center p-4">
//           Adding Alpha through{" "}
//           <span className="abt-us">Estee’s 3 fundamental advantages</span>
//         </h1>
//         <div className="row pt-4 pb-4">
//           <div className="col col-lg-4 col-md-12 text-center">
//             <div className="card rounded-5">
//               <img src={technology} alt="Technology" />
//               <h4 className="p-4 ">Technology</h4>
//             </div>
//           </div>

//           <div className="col col-lg-4 col-md-12 text-center">
//             <div className="card rounded-5">
//               <img src={team} alt="Technology" />
//               <h4 className="p-4 ">Team</h4>
//             </div>
//           </div>

//           <div className="col col-lg-4 col-md-12 text-center">
//             <div className="card rounded-5">
//               <img src={data} alt="Technology" />
//               <h4 className="p-4 ">Data</h4>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AddingAlpha;

import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import icon1 from "../assets/img/tech-icon.png";
import icon2 from "../assets/img/team-icon.png";
import icon3 from "../assets/img/data-icon.png";

const main = () => {
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
            <img src={img1} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={icon1} alt="Technology" />
          </div>
          <div className="p-4">
            <h3>Technology</h3>
          </div>
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12 text-center text-center p-2">
          <div>
            <img src={img2} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={icon2} alt="Team" />
          </div>
          <div className="p-4">
            <h3>Team</h3>
          </div>
        </div>
        <div className="col col-lg-4 col-md-12 col-sm-12 text-center text-center p-2">
          <div>
            <img src={img3} alt="Technology" />
          </div>
          <div className="icon-div">
            <img src={icon3} alt="data" />
          </div>
          <div className="p-4">
            <h3>Data</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
