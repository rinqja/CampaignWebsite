import React from "react";
import "./getinvolved.scss";
import ManImage from "../../../assets/imges/ibrahim.jpg";
import MobileManImage from "../../../assets/imges/mobile-men.png";
import BoxImage from "../../../assets/logo/logo.png";

export default function GetInvolvedSection({ data }) {
  if (!data) {
    console.error('Invalid or missing data prop');
    return null;
  }

  return (
    <div className="richtungs-section-all-contnet-alignment" id="uberuns">
      <div className="grid">
        <div className="grid-items">
          <div className="img">
            <img src={ManImage} alt="ManImage" />
            <img src={MobileManImage} alt="MobileManImage" />
          </div>
          <div className="imguppertext">
            <div className="spacer">
              <div className="text-style">
                <h6>
                  {data.quote.text}<br/>
                  {data.quote.text2}<br/>
                  {data.quote.text3}
                  {/* {data.quote.text.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      <br />
                    </React.Fragment>
                  ))} */}
                </h6>
              </div>
              <div className="left-content-alignment">
                <div className="line"></div>
                <span>{data.quote.author}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="box">
            <div className="box-image">
              <img src={BoxImage} alt="BoxImage" />
            </div>
            <h2>{data.title}</h2>
            {data.content.map((text, index) => (
              index < 2 ? (
                <span key={index}>{text}</span>
              ) : (
                <p key={index}>{text}</p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
