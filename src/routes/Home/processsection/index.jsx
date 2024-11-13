import React, { useState } from "react";
import "./processsection.scss";
import DownIcon from '../../../assets/icons/new-down.svg';
import AnimatedSection from "../../../components/Animation";
export default function Processsection() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="process-section-all-contnet-alignment">
      <div className="container5">
        <div className="grid">
          <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
            <div className="grid-items spacer-left">
              <h6>01</h6>
              <p>Initial Engagement</p>
              <span>
                Our campaign begins with direct community engagement. We believe in 
                understanding the needs of every neighborhood and citizen. Through 
                town halls, community forums, and direct outreach, we gather valuable 
                insights to shape our policies and initiatives.
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="grid-items">
              <h6>02</h6>
              <p>Policy Development</p>
              <span>
                Based on community input, we develop comprehensive policies that 
                address real needs. Our 30-minute community sessions allow citizens 
                to provide direct feedback on proposed initiatives, ensuring our 
                approach truly represents our community's aspirations.
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
            <div className="grid-items">
              <h6>03</h6>
              <p>Implementation</p>
              <span>
                Action speaks louder than words. Once policies are refined through 
                community feedback, we move swiftly to implementation. Our team ensures 
                transparent execution while maintaining regular communication with 
                constituents about progress and impact.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container6" id="faq">
        <div className="sub-heading">
          <h5>FREQUENTLY ASKED QUESTIONS</h5>
        </div>
        <div className="main-grid main-grid-mobile-hide">
          <div className="main-grid-items">
            <div className="flip-card one">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What are your key<br/>priorities for our<br/>community?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our priorities focus on economic development, education reform, 
                    healthcare access, and environmental protection. We're committed 
                    to creating sustainable growth while ensuring no community member 
                    is left behind.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card two">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>How do you plan to<br/>engage with<br/>constituents?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    We maintain an open-door policy with regular town halls, digital 
                    forums, and community meetings. Our team is always available to 
                    hear your concerns and ideas for improving our community.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card three">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What experience do<br/>you bring to this<br/>position?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    With 15 years of public service experience, including roles in 
                    city council and community development, I bring practical knowledge 
                    and proven leadership skills to address our community's challenges.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>How will you ensure<br/>transparency in<br/>governance?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    We're committed to full transparency through regular public reports, 
                    open budget meetings, and accessible digital platforms where citizens 
                    can track progress on all initiatives.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-grid-items">
            <div className="flip-card new1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What sets your<br/>approach apart from<br/>traditional<br/>governance?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our approach combines modern technology with traditional community 
                    values. We use digital tools for better engagement while maintaining 
                    personal connections through regular community presence.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card four">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What is your plan for<br/>economic growth?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our economic plan focuses on supporting local businesses, attracting 
                    new investments, and creating job opportunities through reduced 
                    bureaucracy and targeted development programs.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card five">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>How will you address<br/>environmental<br/>concerns?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our environmental strategy includes green energy initiatives, 
                    sustainable development practices, and community-based conservation 
                    programs to ensure a cleaner, healthier future.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card six">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What are your plans<br/>for education<br/>reform?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    We're committed to modernizing our education system through 
                    increased funding, technology integration, and expanded after-school 
                    programs to ensure every student has access to quality education.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-grid-items">
            <div className="flip-card new3">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>How will you improve<br/>public safety?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our comprehensive public safety plan includes community policing,
                    improved emergency response times, and neighborhood watch programs.
                    We'll work closely with law enforcement to ensure safe communities.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What about senior<br/>citizen services?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    We're expanding senior services with improved transportation,
                    healthcare access, and community programs. Our goal is to ensure
                    our seniors can live independently with dignity and support.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new5">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>How will you support<br/>local businesses?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Our business support program includes tax incentives, reduced
                    regulations, and development grants. We'll create a business-friendly
                    environment that encourages growth and innovation.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new6">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>What's your vision for<br/>infrastructure?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    We're planning major upgrades to roads, public transport, and
                    digital infrastructure. Smart city initiatives will improve
                    services while maintaining cost efficiency.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-m">
          <div className="new-contnet-alignment-design-style" onClick={() => setToggle(!toggle)}>
            <a>{toggle ? 'Show Less' : 'Show More'}</a>
            <img className={toggle ? "animation-time rotate" : "animation-time"} src={DownIcon} alt="DownIcon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
