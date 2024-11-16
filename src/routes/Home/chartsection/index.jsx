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

export default function Chartsection() {
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
        console.log("Is intersecting:1", entry.isIntersecting);

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

    if (circleContainerRef5.current) {
      observer.observe(circleContainerRef5.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:1", entry.isIntersecting);

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

    if (circleContainerRef.current) {
      observer.observe(circleContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:1", entry.isIntersecting);

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

    if (circleContainerRef3.current) {
      observer.observe(circleContainerRef3.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:2", entry.isIntersecting);

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

    if (circleContainerRef2.current) {
      observer.observe(circleContainerRef2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:3", entry.isIntersecting);

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

    if (circleContainerRef1.current) {
      observer.observe(circleContainerRef1.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:3", entry.isIntersecting);

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

    if (circleContainerRef4.current) {
      observer.observe(circleContainerRef4.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animationPlayed]);

  return (
    <>
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
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={200}
              >
                <div className="grid-items">
                  <div>
                    <h2>ANGAZHIMI I KOMUNITETIT</h2>
                    <p>
                      Programet tona të arritjes së komunitetit kanë treguar sukses të jashtëzakonshëm në angazhimin e qytetarëve.
                      Përmes takimeve të rregullta publike dhe forumeve komunitare, kemi rritur pjesëmarrjen publike
                      në qeverisjen lokale me 200%. Qasja jonë inovative ndaj angazhimit qytetar ka krijuar
                      lidhje më të forta midis qeverisë dhe banorëve.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Mandati i Mëparshëm</h6>
                        <div ref={circleContainerRef} className={`circle-container ${animate ? 'animate-border' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">25%</div>Pjesëmarrja e Komunitetit
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>Progresi Aktual</h6>
                        <div ref={circleContainerRef} className={`circle-container7-8 ${animate ? 'animate-border4-6' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">75%</div>Pjesëmarrja e Komunitetit
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="last-text">
                      <span>
                        *Bazuar në statistikat e angazhimit të komunitetit 2022-2024
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
                    <h2>RRITJA EKONOMIKE</h2>
                    <p>
                      Iniciativat tona ekonomike kanë krijuar rritje të konsiderueshme të vendeve të punës dhe zhvillim të biznesit.
                      Përmes programeve të synuara dhe reduktimit të burokracisë, kemi ndihmuar bizneset lokale të lulëzojnë
                      dhe të tërheqin investime të reja në komunitetin tonë. Rritja e bizneseve të vogla ka tejkaluar
                      pritshmëritë, me një rritje prej 150% të bizneseve të reja.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Mandati i Mëparshëm</h6>
                        <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">3%</div>Shkalla e Rritjes Ekonomike
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>Progresi Aktual</h6>
                        <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">8%</div>Shkalla e Rritjes Ekonomike
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="last-text">
                      <span>
                        *Bazuar në treguesit ekonomikë lokalë 2022-2024
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={600}
              >
                <div className="grid-items">
                  <div>
                    <h2>PËRMIRËSIMI I INFRASTRUKTURËS</h2>
                    <p>
                      Kemi investuar në projekte infrastrukturore që përmirësojnë jetën e përditshme të qytetarëve tanë.
                      Ndërtimi i rrugëve të reja, përmirësimi i transportit publik dhe zhvillimi i qendrave komunitare
                      janë vetëm disa nga iniciativat tona për të ndërtuar një komunitet më të fortë dhe më të lidhur.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Mandati i Mëparshëm</h6>
                        <div ref={circleContainerRef3} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">40%</div>Projekte të Përfunduara
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>Progresi Aktual</h6>
                        <div ref={circleContainerRef3} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">85%</div>Projekte të Përfunduara
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="last-text">
                      <span>
                        *Bazuar në raportet e infrastrukturës 2022-2024
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={800}
              >
                <div className="grid-items">
                  <div>
                    <h2>MBROJTJA E MJEDISIT</h2>
                    <p>
                      Kemi inicuar projekte për energji të gjelbër që do të ulin gjurmën tonë të karbonit me 30%
                      gjatë pesë viteve të ardhshme. Përkushtimi ynë ndaj qëndrueshmërisë mjedisore garanton një
                      të ardhme më të pastër për brezat e ardhshëm.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Mandati i Mëparshëm</h6>
                        <div ref={circleContainerRef4} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">10%</div>Reduktimi i Karbonit
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>Progresi Aktual</h6>
                        <div ref={circleContainerRef4} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                          <div className="text-1">
                            <div className="title-1">30%</div>Reduktimi i Karbonit
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="last-text">
                      <span>
                        *Bazuar në iniciativat mjedisore 2022-2024
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="sec-heading-text" id="bashkepunimi-juaj">
            <h4>BASHKËPUNIMI YNË PËR TË ARDHMEN</h4>
          </div>
        </div>
      </div>
    </>
  );
}
