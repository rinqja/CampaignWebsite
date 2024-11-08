import React from "react";
import "./diesesection.scss";
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
          <h2>DIESE HERAUSFORDERUNGEN HAST DU?</h2>
        </div>
        </AnimatedSection>
        <div className="box-center-alignment">
          <div className="box">
          <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>
                Kein 5-6-stelliger Monatsumsatz durch Neu- oder Bestandskunden
              </span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={500}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Mangel an Neukunden und neuen Vertriebspartnern</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Mangel an Empfehlungen</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={650}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Keine Zeit für umsatzbringende Tätigkeiten</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={700}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Zu hohe Fluktuation</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={750}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Keine automatisierten Prozesse und Einarbeitung</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Keine Online-Sichtbarkeit und Leads</span>
            </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={850}>
            <div className="icon-text">
              <img src={TrueIcon} alt="TrueIcon" />
              <span>Nicht das richtige Mindset</span>
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
                MACH <br />
                SCHLUSS <br />
                MIT
              </h3>
              <div className="relative-div">
              <span>{`->`} Kaltaqkuise</span>
              <img src={RedIcon} alt="RedIcon"/>
              </div>
              <div className="relative-div1">
              <span>{`->`} veralteten Methoden und Skripte</span>
              <img src={RedIcon2} alt="RedIcon2"/>
              </div>
              <div className="relative-div-3">
              <span>{`->`} Unqualifizierten Kunden</span>
                <img src={RedIcon3} alt="RedIcon3"/>
              </div>
            <div className="relative-div-4">
            <span>
                {`->`} {`<`} 10.000€ Einkommen/monatlich
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
                ZEIT DEIN <br /> BETRIEBSSYSTEM <br />
                ZU AKTUALISIEREN
              </h3>
              <div className="text">
                <p>
                  Neue Wege, Neue Chancen, außergewöhnlich hohe
                  Verdienstmöglichkeiten durch unser einzigarBges Konzept!
                </p>
                <p>
                  Schaffe eine neue Identität. Du wirst ein neues System
                  annehmen, dir automatisierte Prozesse erschaffen, veraltete
                  und nicht zeitgemäße Abläufe ablegen, welche deine Umsatzziele
                  und deinen Wachstum bisher gebremst haben.
                </p>
                <p>
                  Wir bauen mit selbstständigen Finanzdienstleister ein
                  erfolgreiches und automaBsiertes Unternehmen auf.
                </p>
              </div>
            </div>
            <a href="#Leistungen">
            <button>Mehr erfahren</button>
            </a>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
