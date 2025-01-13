import React from "react";
import "./issues.scss";
import TrueIcon from "../../../assets/icons/true.svg";
import RedIcon from "../../../assets/imges/red.png";
import RedIcon2 from "../../../assets/imges/two.png";
import RedIcon3 from "../../../assets/imges/three.png";
import RedIcon4 from "../../../assets/imges/four.png";
import AnimatedSection from "../../../components/Animation";

export default function IssuesSection({ data }) {
  return (
    <div className="diesesection-all-contnet-alignment">
      <div className="container2" id="container2">
        <AnimatedSection animationType="fade-up" duration={1000} delay={300}>
          <div className="text">
            <h2>{data.title}</h2>
          </div>
        </AnimatedSection>
        <div className="box-center-alignment">
          <div className="box">
            {data.items.map((item, index) => (
              <AnimatedSection 
                key={index}
                animationType="fade-up" 
                duration={1000} 
                delay={400 + (index * 100)}
              >
                <div className="icon-text">
                  <img src={TrueIcon} alt="TrueIcon" />
                  <span>{item.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedSection animationType="fade-up" duration={1000} delay={900}>
          <div className="line"></div>
        </AnimatedSection>
        <div className="grid">
          <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
            <div className="grid-items">
              <div>
                <h3>{data.pastIssues.title}</h3>
                {data.pastIssues.items.map((item, index) => (
                  <div key={index} className={`relative-div${index > 0 ? index : ''}`}>
                    <span>{`->`} {item.text}</span>
                    <img src={[RedIcon, RedIcon2, RedIcon3, RedIcon4][index]} alt={`RedIcon${index + 1}`}/>
                  </div>
                ))}
              </div>
              <a href="#kontact">
                <button>{data.modernApproach.buttonText}</button>
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="grid-items">
              <div>
                <h3>{data.modernApproach.title}</h3>
                <div className="text">
                  {data.modernApproach.description.map((paragraph, index) => (
                    
                    <p key={index}>{`->`}{paragraph}</p>
                  ))}
                </div>
              </div>
              <a href="#Leistungen">
                <button>{data.modernApproach.buttonText}</button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
