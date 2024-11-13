import React from "react";
import { useRef, useState,useEffect } from "react";
import "./chartsection.scss";
import Chart1 from "../../../assets/imges/chart1.svg";
import Chart2 from "../../../assets/imges/chart2.svg";
import Chart3 from "../../../assets/imges/c3.svg";
import Chart4 from "../../../assets/imges/c4.svg";
import Chart5 from "../../../assets/imges/c5.svg";
import Chart6 from "../../../assets/imges/c6.svg";
import Chart7 from "../../../assets/imges/c7.svg";
import Chart8 from "../../../assets/imges/c8.svg";
import Chart9 from "../../../assets/imges/c9.svg";
import Chart10 from "../../../assets/imges/c10.svg";
import Chart11 from "../../../assets/imges/c11.svg";
import Chart12 from "../../../assets/imges/c12.svg";
import AnimatedSection from "../../../components/Animation";
export default function Chartsection() {

  const [animate, setAnimate] = useState(false);
  // New state variable to track if the animation has already been played
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const circleContainerRef = useRef(null);
  const circleContainerRef1 = useRef(null);
  const circleContainerRef2 = useRef(null);
  const circleContainerRef3 = useRef(null);
  const circleContainerRef4 = useRef(null);
  const circleContainerRef5 = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:1", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef5.current) {
      observer.observe(circleContainerRef5.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:1", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef.current) {
      observer.observe(circleContainerRef.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:1", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef3.current) {
      observer.observe(circleContainerRef3.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]); 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:2", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef2.current) {
      observer.observe(circleContainerRef2.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:3", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef1.current) {
      observer.observe(circleContainerRef1.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debugging: Log the entry to see if it's intersecting
        console.log("Is intersecting:3", entry.isIntersecting);
  
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true); // Ensure animation plays only once
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      },
      {
        root: null, // implies the browser viewport
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value based on when you want the animation to start
      }
    );
  
    if (circleContainerRef4.current) {
      observer.observe(circleContainerRef4.current);
    }
  
    return () => {
      // Cleanup: make sure to disconnect the observer
      observer.disconnect();
    };
  }, [animationPlayed]); 
  
  return (
    <>
      <div className="chart-section-all-contnet-alignment" id="Leistungen">
        <div className="container4">
          <div className="title">
            <h4>CAMPAIGN ACHIEVEMENTS</h4>
            <div className="line"></div>
          </div>
        </div>
        {/* <div className="all-chart-section-all-contnet-alignment">
          <div className="main-chart">
            <div className="container4">
              <div className="header">
                <div className="grid">
                  <div className="grid-items">
                    <h4>SCHRITT 1</h4>
                    <div className="text">
                      <p>
                        Zunächst setzen wir uns mit deinen aktuellen
                        Verkaufsmethoden auseinander. Identifizieren veraltete
                        Methoden und ersetzen diese durch effektivere. Du
                        bekommst von uns neue, moderne und erfolgreiche Skripte
                        an die Hand, die auf deine Zielgruppe und dein Angebot
                        maßgeschneidert sind. Durch unsere gezielten Module,
                        sowie den Live-Calls wirst du mit unseren erfolgreich in
                        der Praxis angewendeten Skripten deine Beratungsqualität
                        auf ein neues Level anheben und deinen Umsatz bei
                        gleicher Terminkapazität mind. verdoppeln.
                      </p>
                    </div>
                  </div>
                  <div className="grid-items">
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Markt</h6>
                        <div className="chart-center-alignment">
                          <img src={Chart1} alt="Chart1" />
                        </div>
                      </div>
                      <div>
                        <h6>Richtungswechsel</h6>
                        <div className="chart-center-alignment">
                          <img src={Chart2} alt="Chart2" />
                        </div>
                      </div>
                    </div>
                    <div className="last-text">
                      <span>
                        *Angaben aus + 1.000 befragten selbstständigen
                        Finanzberatern (mwd)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="new-card-design-style">
          <div className="container">
            <div className="grid">
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={200}
              >
                <div className="grid-items">
                  <div>
                  <h2>COMMUNITY ENGAGEMENT</h2>
              <p>
                Our community outreach programs have shown remarkable success in engaging citizens. 
                Through regular town halls and community forums, we've increased public participation 
                in local governance by 200%. Our innovative approach to citizen engagement has created 
                stronger connections between government and residents.
              </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                      <h6>Previous Term</h6>
                  <div ref={circleContainerRef} className={`circle-container ${animate ? 'animate-border' : ''}`}>
                    <div class="text-1"><div className="title-1">25%</div>Community Participation</div>
                  </div> 
                      </div>
                      <div>
                      <h6>Current Progress</h6>
                  <div ref={circleContainerRef} className={`circle-container7-8 ${animate ? 'animate-border4-6' : ''}`}>
                    <div class="text-1"><div className="title-1">75%</div>Community Participation</div>
                  </div>  
                      </div>
                    </div>
                    <div className="last-text">
                    <span>
                  *Based on community engagement statistics 2022-2024
                </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={400}
              >
                <div className="grid-items">
                  <div>
                  <h2>ECONOMIC GROWTH</h2>
              <p>
                Our economic initiatives have created significant job growth and business development. 
                Through targeted programs and reduced bureaucracy, we've helped local businesses thrive 
                and attract new investments to our community. Small business growth has exceeded 
                expectations, with new startups increasing by 150%.
              </p>
                  </div>
                  <div>
                  <div className="two-chart-alignment">
                <div>
                  <h6>Previous Term</h6>
                  <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                    <div class="text-1"><div className="title-1">3%</div>Economic Growth Rate</div>
                  </div>  
                </div>
                <div>
                  <h6>Current Progress</h6>
                  <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                    <div class="text-1"><div className="title-1">8%</div>Economic Growth Rate</div>
                  </div>  
                </div>
              </div>
                    <div className="last-text">
                    <span>
                  *Based on local economic indicators 2022-2024
                </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={400}
              >
                <div className="grid-items">
                  <div>
                  <h2>ECONOMIC GROWTH</h2>
              <p>
                Our economic initiatives have created significant job growth and business development. 
                Through targeted programs and reduced bureaucracy, we've helped local businesses thrive 
                and attract new investments to our community. Small business growth has exceeded 
                expectations, with new startups increasing by 150%.
              </p>
                  </div>
                  <div>
                  <div className="two-chart-alignment">
                <div>
                  <h6>Previous Term</h6>
                  <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                    <div class="text-1"><div className="title-1">3%</div>Economic Growth Rate</div>
                  </div>  
                </div>
                <div>
                  <h6>Current Progress</h6>
                  <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                    <div class="text-1"><div className="title-1">8%</div>Economic Growth Rate</div>
                  </div>  
                </div>
              </div>
                    <div className="last-text">
                    <span>
                  *Based on local economic indicators 2022-2024
                </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={400}
              >
                <div className="grid-items">
                  <div>
                  <h2>ECONOMIC GROWTH</h2>
              <p>
                Our economic initiatives have created significant job growth and business development. 
                Through targeted programs and reduced bureaucracy, we've helped local businesses thrive 
                and attract new investments to our community. Small business growth has exceeded 
                expectations, with new startups increasing by 150%.
              </p>
                  </div>
                  <div>
                  <div className="two-chart-alignment">
                <div>
                  <h6>Previous Term</h6>
                  <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                    <div class="text-1"><div className="title-1">3%</div>Economic Growth Rate</div>
                  </div>  
                </div>
                <div>
                  <h6>Current Progress</h6>
                  <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                    <div class="text-1"><div className="title-1">8%</div>Economic Growth Rate</div>
                  </div>  
                </div>
              </div>
                    <div className="last-text">
                    <span>
                  *Based on local economic indicators 2022-2024
                </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="sec-heading-text" id="deine-zusammenarbeit">
            <h4>DEINE ZUSAMMENARBEIT MIT RICHTUNGSWECHSEL</h4>
          </div>
        </div>
      </div>
    </>
  );
}
