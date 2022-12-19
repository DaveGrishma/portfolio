import React from "react";


import monitAir from "../Data/Portfolioimg/monitAir.png";
import sd from "../Data/Portfolioimg/sd.png";
import val from "../Data/Portfolioimg/val.png";

import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={monitAir} className="img-fluid" alt="1Life" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={val}
                    className="img-fluid"
                    alt="Alembic"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={sd}
                    className="img-fluid"
                    alt="AvidOrganics"
                  />
                </div>
              </div>                         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
