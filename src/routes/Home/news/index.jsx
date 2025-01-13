import React, { useState, useEffect } from "react";
import "./news.scss";
import TrueIcon from "../../../assets/icons/true-two.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";
import AnimatedSection from "../../../components/Animation";

export default function NewsSection({ data }) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!document.querySelector("script[src='https://player.vimeo.com/api/player.js']")) {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const updatesToShow = showAll ? data.updates : data.updates.slice(0, 4);

  return (
    <div className="richtungswechsel-section-all-contnet-alignment">
      <div className="text">
        <h4>{data.title}</h4>
        <div className="line"></div>
      </div>
      
      <div className="container3">
        <div className="video-wrapper">
          <div className="video-center">
            <iframe 
              src={data.videoUrl}
              frameBorder="0" 
              allow="fullscreen; picture-in-picture" 
              style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} 
              title="Campaign Video"
            />
          </div>
          <div className="header-mobile">
            <h5>{data.subtitle}</h5>
          </div>
        </div>
        
        <div className="heading">
          <h5>{data.subtitle}</h5>
        </div>
        
        <div className="icon-grid-container">
          {updatesToShow.map((update, index) => (
            <div className="icon-grid" key={index}>
              <span>{update.text}</span>
              <img src={TrueIcon} alt="TrueIcon" />
            </div>
          ))}
        </div>
      
        <div onClick={() => setShowAll(true)} className="arrow-design">
          <span>{data.buttonText}</span>
          <img src={ArrowIcon} alt="ArrowIcon" />
        </div>
      </div>
    </div>
  );
}
