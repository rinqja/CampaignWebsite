import React from "react";
import "./about.scss";
import ArrowIcon from "../../../assets/icons/arrow.svg";
export default function AboutSection() {
  return (
    <div className="richtungswechsel-sapcer">
      <div className="container">
        <div className="richtungswechsel-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <p>LEADERSHIP FOR CHANGE</p>
            </div>
            <div className="grid-items">
              <h1>BUILDING A BETTER FUTURE TOGETHER</h1>
              <span>
              As your deputy candidate, I am committed to bringing meaningful change 
    through innovative policies and dedicated public service. With 15 years 
    of experience in community development and policy making.
              </span>
              <span>
                My track record shows consistent dedication to improving education, 
                healthcare accessibility, and economic opportunities for all citizens. 
                Together, we can build a stronger, more prosperous community that
                works for everyone.
              </span>
              <div className="btn-alignment">
                <a href="#kontact">
                  <button>Join Our Campaign</button>
                </a>
                <a href="#uberuns">About Me</a>
              </div>
            </div>
          </div>
          <a href="#Leistungen">
            <div className="arrow-text">
              <span>click to see more</span>
              <img src={ArrowIcon} alt="ArrowIcon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
