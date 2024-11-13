import React from "react";
import "./issues.scss";
import TrueIcon from "../../../assets/icons/true.svg";
import RedIcon from "../../../assets/imges/red.png";
import RedIcon2 from "../../../assets/imges/two.png";
import RedIcon3 from "../../../assets/imges/three.png";
import RedIcon4 from "../../../assets/imges/four.png";
import AnimatedSection from "../../../components/Animation";

export default function AboutSection() {
  return (
    <div className="diesesection-all-contnet-alignment">
      <div className="container2">
      <AnimatedSection animationType="fade-up" duration={1000} delay={300}>
        <div className="text">
          <h2>KEY PRIORITIES</h2>
        </div>
        </AnimatedSection>
        <div className="box-center-alignment">
          <div className="box">
          <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>
              Education Reform: Modernizing our schools and increasing access to quality education
              for all students, regardless of their background.          
              </span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={500}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Economic Development: Creating job opportunities and supporting local businesses
              through targeted initiatives and reduced bureaucracy.</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span> Healthcare Access: Improving medical facilities and ensuring affordable
              healthcare services for all community members.</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={650}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span> Environmental Protection: Implementing sustainable policies and green initiatives
              to protect our local environment for future generations.</span>
            </div>
            </AnimatedSection>
           
           
          </div>
        </div>
        <AnimatedSection animationType="fade-up" duration={1000} delay={900}>
        <div className="line"></div>
        </AnimatedSection>
        <div className="grid">
        <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
          <div className="grid-items">
            <div>
            <h3>
  BREAKING <br />
  AWAY FROM <br />
  THE PAST
</h3>
<div className="relative-div">
  <span>{`->`} Outdated Policies</span>
  <img src={RedIcon} alt="RedIcon"/>
</div>
<div className="relative-div1">
  <span>{`->`} Bureaucratic Inefficiency</span>
  <img src={RedIcon2} alt="RedIcon2"/>
</div>
<div className="relative-div-3">
  <span>{`->`} Inadequate Public Services</span>
  <img src={RedIcon3} alt="RedIcon3"/>
</div>
<div className="relative-div-4">
  <span>
    {`->`} Underfunded Community Programs
  </span>
  <img src={RedIcon4} alt="RedIcon4"/>
</div>
              
            </div>
            <a href="#kontact">
            <button>Mehr erfahren</button>
            </a>
          </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
          <div className="grid-items">
            <div>
            <h3>
  TIME TO <br /> MODERNIZE <br />
  OUR APPROACH
</h3>
<div className="text">
  <p>
    New paths, new opportunities! We're introducing innovative solutions
    for our community's most pressing challenges.
  </p>
  <p>
    Create a new legacy. We will implement a modern system
    of governance, establish efficient processes, and remove outdated
    procedures that have held back our community's growth and
    development.
  </p>
  <p>
    Together with independent experts and community leaders,
    we're building a successful and sustainable future.
  </p>
</div>
            </div>
            <a href="#Leistungen">
            <button>Learn More</button>
            </a>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
