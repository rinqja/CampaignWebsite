import React from "react";
import { useRef, useState, useEffect } from "react";
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

export default function Chartsection({ data }) {
  const [animate, setAnimate] = useState(false);
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
        if (entry.isIntersecting && !animationPlayed) {
          setAnimate(true);
          setAnimationPlayed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    [circleContainerRef, circleContainerRef1, circleContainerRef2, 
     circleContainerRef3, circleContainerRef4, circleContainerRef5].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  return (
    <div className="chart-section-all-contnet-alignment" id="Arritjet">
      <div className="container4">
        <div className="title">
          <h4>ARRITJET E FUSHATËS</h4>
          <div className="line"></div>
        </div>
      </div>
      <div className="new-card-design-style">
        <div className="container">
          <div className="grid">
            <AnimatedSection animationType="fade-up" duration={1000} delay={200}>
              <div className="grid-items">
                <div>
                  <h2>{data.community.title}</h2>
                  <p>{data.community.description}</p>
                </div>
                <div>
                  <div className="two-chart-alignment">
                    <div>
                      <h6>Mandati i Mëparshëm</h6>
                      <div ref={circleContainerRef} className={`circle-container ${animate ? 'animate-border' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.community.previous}%</div>
                          {data.community.label}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>Progresi Aktual</h6>
                      <div ref={circleContainerRef} className={`circle-container7-8 ${animate ? 'animate-border4-6' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.community.current}%</div>
                          {data.community.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-text">
                    <span>{data.community.footnote}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
              <div className="grid-items">
                <div>
                  <h2>{data.economy.title}</h2>
                  <p>{data.economy.description}</p>
                </div>
                <div>
                  <div className="two-chart-alignment">
                    <div>
                      <h6>Mandati i Mëparshëm</h6>
                      <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.economy.previous}%</div>
                          {data.economy.label}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>Progresi Aktual</h6>
                      <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.economy.current}%</div>
                          {data.economy.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-text">
                    <span>{data.economy.footnote}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
              <div className="grid-items">
                <div>
                  <h2>{data.infrastructure.title}</h2>
                  <p>{data.infrastructure.description}</p>
                </div>
                <div>
                  <div className="two-chart-alignment">
                    <div>
                      <h6>Mandati i Mëparshëm</h6>
                      <div ref={circleContainerRef3} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.infrastructure.previous}%</div>
                          {data.infrastructure.label}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>Progresi Aktual</h6>
                      <div ref={circleContainerRef3} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.infrastructure.current}%</div>
                          {data.infrastructure.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-text">
                    <span>{data.infrastructure.footnote}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
              <div className="grid-items">
                <div>
                  <h2>{data.environment.title}</h2>
                  <p>{data.environment.description}</p>
                </div>
                <div>
                  <div className="two-chart-alignment">
                    <div>
                      <h6>Mandati i Mëparshëm</h6>
                      <div ref={circleContainerRef3} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.environment.previous}%</div>
                          {data.environment.label}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6>Progresi Aktual</h6>
                      <div ref={circleContainerRef3} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                        <div className="text-1">
                          <div className="title-1">{data.environment.current}%</div>
                          {data.environment.label}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="last-text">
                    <span>{data.environment.footnote}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
