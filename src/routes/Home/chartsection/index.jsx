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
            <h4>UNSERE LÖSUNG FÜR MAXIMALEN ERFOLG</h4>
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
                    <h2>SCHRITT 1</h2>
                    <p>
                      Fillimisht, analizojmë politikat dhe metodat e zbatuara nga partitë e tjera në ekonomi. Identifikojmë praktikat e vjetruara, të paefektshme dhe të dëmshme që kanë penguar zhvillimin ekonomik të vendit.

                      Ne do të prezantojmë zgjidhje të reja, moderne dhe të suksesshme, të përshtatura për nevojat e qytetarëve dhe për një ekonomi të qëndrueshme. Përmes planeve tona të targetuara dhe implementimit të programeve të suksesshme, synojmë të transformojmë ekonominë dhe të përmirësojmë ndjeshëm mirëqenien e të gjithë qytetarëve                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef} className={`circle-container ${animate ? 'animate-border' : ''}`}>
                          <div class="text-1"><div className="title-1">0-1 </div>Empfehlungen pro Kunde</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef} className={`circle-container7-8 ${animate ? 'animate-border4-6' : ''}`}>
                          <div class="text-1"><div className="title-1">2-3 </div>Empfehlungen pro Kunde</div>
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
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={400}
              >
                <div className="grid-items">
                  <div>
                    <h2>SCHRITT 2</h2>
                    <p>
                      Das Empfehlungsmarketing wird vollständig mit unserem
                      „Neugiererzeuger“ automatisiert, digitalisiert und
                      Datenschutzkonform eingesetzt, um 2-3 warme Empfehlungen
                      zu generieren. Das bedeutet keine Zettel mehr, welcher
                      Kunde ausfüllen muss oder dieser einfach Nummern
                      weitergeben soll, ohne vorher mit den Empfohlenen
                      gesprochen zu haben. Diese Methode sorgt nicht nur für
                      deinen vollen Terminkalender, sondern schafft dir auch
                      eine neue Identität in deinem Unternehmen, welche dich von
                      nun an "Empfehlenswert" macht.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef2} className={`circle-container4-6 ${animate ? 'animate-border4-6' : ''}`}>
                          <div class="text-1"><div className="title-1">4-6 </div>Abschlüsse aus 10 Terminen</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef2} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                          <div class="text-1"><div className="title-1">7-8 </div>Abschlüsse aus 10 Terminen</div>
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
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={600}
              >
                <div className="grid-items">
                  <div>
                    <h2>SCHRITT 3</h2>
                    <p>
                      Du erhältst deine eigene Landingpage, um Vertrauen mit
                      deinen potenziellen Kunden und Vertriebspartnern aufbauen
                      zu können. Darüber hinaus wirst du lernen, wie du durch
                      gezielte Marketing- und Werbemaßnahmen mehr Aufmerksamkeit
                      auf dich und deine Angebote lenkst. Wir werden auch deine
                      Online-Präsenz optmieren, um dich im Internet besser
                      sichtbar zu machen, um neue potenzielle Kunden zu
                      erreichen. Du wirst dir dadurch deinen eigenen
                      Lead-Generator aufbauen. Und das beste daran: Die Leads
                      werden durch unsere Strategie von selbst bezahlt.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef1} className={`circle-container16 ${animate ? 'animate-border16' : ''}`}>
                          <div class="text-1"><div className="title-1">16%</div>Zeit für gewinnbringende <br />Tätigkeiten</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef1} className={`circle-container7-8 ${animate ? 'animate-border7-8' : ''}`}>
                          <div class="text-1"><div className="title-1">79%</div>Zeit für gewinnbringende <br />Tätigkeiten</div>
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
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={700}
              >
                <div className="grid-items">
                  <div>
                    <h2>SCHRITT 4</h2>
                    <p>
                      Durch eine eigene digitale Akademie werden neue
                      Vertriebspartner mit neuen und zeitgemäßen Methoden
                      rekrutiert und eingearbeitet. Hier werden die
                      grundlegenden Skills des jeweiligen Unternehmens mit
                      implementiert, aber auch Freiraum geschaffen, um die
                      Unterschrift des Unternehmers zu erkennen und die besten
                      Skills zu duplizieren. Fortschritte der Einarbeitung
                      können erkannt werden. Somit bleibt der Führungskraft mehr
                      Zeit für Umsatz, zudem wird vermieden auch in Zukunft
                      gewisse Themen zu wiederholen. Das sorgt für gute Stimmung
                      im Team, Effizienz und eine erfolgreiche Einarbeitung in
                      die Systeme.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef3} className={`circle-container16 ${animate ? 'animate-border16' : ''}`}>
                          <div class="text-1"><div className="title-1">20%</div>Sichtbarkeit</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef3} className={`circle-container94 ${animate ? 'animate-border94' : ''}`}>
                          <div class="text-1"><div className="title-1">94%</div>Sichtbarkeit</div>
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
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={800}
              >
                <div className="grid-items">
                  <div>
                    <h2>SCHRITT 5</h2>
                    <p>
                      Aus Dir wird ein Unternehmer, indem du nicht mehr im
                      Unternehmen arbeitest, sondern ausschließlich am
                      Unternehmen. Durch automatisierte Kundengewinnung- und
                      betreuung, Vertriebspartner Akquise und Einarbeitung baust
                      du dir Sachwerte im 7-stelligen Betrag auf. Kanzleien und
                      Beratungen werden zu Lifestyle- Treffpunkten umgestaltet
                      und die Zusammenarbeit mit Vertriebspartnern wird zu einer
                      Leidenschaft. Vertrieb und Verkauf gewinnt eine neue
                      Bedeutung und bekommt eine ganz neue Atmosphäre.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef4} className={`circle-container37 ${animate ? 'animate-border37' : ''}`}>
                          <div class="text-1"><div className="title-1">37%</div>Erfolgswahrscheinlichkeit <br />neuer Vertriebspartner</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef4} className={`circle-container87 ${animate ? 'animate-border87' : ''}`}>
                          <div class="text-1"><div className="title-1">87%</div>Erfolgswahrscheinlichkeit <br />neuer Vertriebspartner</div>
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
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={900}
              >
                <div className="grid-items">
                  <div>
                    <h2>SCHRITT 6</h2>
                    <p>
                      Das Geheimnis für deinen unternehmerischen und
                      persönlichen Erfolg ist das richtige Mindset. Es hilft
                      dir, deine Ziele klar zu definieren, Hindernisse zu
                      überwinden und dein volles Potenzial auszuschöpfen. Dabei
                      wirst du trotz auftretender Widrigkeiten,
                      unvorhergesehener Herausforderungen, vermeintlicher
                      Rückschläge stets deinem inneren Kompass vertrauen können.
                    </p>
                  </div>
                  <div>
                    <div className="two-chart-alignment">
                      <div>
                        <h6>Partite tjera</h6>
                        <div ref={circleContainerRef5} className={`circle-container37 ${animate ? 'animate-border37' : ''}`}>
                          <div class="text-1"><div className="title-1">41%</div>Emotionale Intelligenz <br />und Resilienz</div>
                        </div>
                      </div>
                      <div>
                        <h6>Partia jone</h6>
                        <div ref={circleContainerRef5} className={`circle-container97 ${animate ? 'animate-border97' : ''}`}>
                          <div class="text-1"><div className="title-1">97%</div>Emotionale Intelligenz <br />und Resilienz</div>
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
