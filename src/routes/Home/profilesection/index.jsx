import React from "react";
import "./profilesection.scss";
import Image01 from "../../../assets/imges/01.png";
import Image02 from "../../../assets/imges/02.png";
import Image03 from "../../../assets/imges/03.png";
import AnimatedSection from "../../../components/Animation";
export default function Profilesection() {
  return (
    <div className="profile-section-all-contnet-alignment">
      <div className="container7">
        <div className="grid">
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image01} alt="Image01" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>ONUR YILDIZ</h4>
                <h5>Gründer & Experte</h5>
                <h6>
                  für automatisierte Vertriebs- und Verkaufsprozesse, sowie
                  Bestandsmanagement
                </h6>
                <div className="left-right">
                  <p>Das macht Onur Yildiz außergewöhnlich: </p>
                  <p>
                    Er ist ein überzeugender Rhetoriker und hat die Fähigkeit,
                    Texte kreativ zu verfassen und durch anschauliche Beispiele
                    und Metaphern zu interpretieren. Er schafft es, komplexe
                    Strategien, Techniken und Handlungen vereinfacht aufzuzeigen
                    und verständlich wiederzugeben.
                  </p>
                  <p>
                    "When u lose, experience is the reward" <br />
                    "Wenn du verlierst, ist Erfahrung die Belohnung".
                  </p>
                  <p>
                    Somit baut er bei seinen Teilnehmern Verständnis der
                    Kommunikationsformen und die Fähigkeit, für die
                    verschiedenen Methoden angemessene Texte zu verfassen auf.
                    Sein aussergewöhnlicher Stil ist es, Informationen
                    unterhaltsam, humorvoll und motivierend zu übertragen.
                  </p>
                  <p>
                    Diese Methode sorgt jedes mal für großartige IMPULSE,
                    BEWUNDERUNG und großes INTERESSE bei den Teilnehmern und
                    Mandanten.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image02} alt="Image02" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>NOEL KEANU YILDIZ</h4>
                <h5>Gründer & Experte</h5>
                <h6>für Recruiting und Mindset</h6>
                <div className="left-right">
                  <p>Das macht Noel Keanu Yildiz außergewöhnlich: </p>
                  <p>
                    Neben seiner Kompetenz im Vertrieb ist er auch ein Experte
                    im Bereich emotionaler Intelligenz. Mit einem hohen Maß an
                    Empathie und sozialer Kompetenz pflegt er starke
                    zwischenmenschliche Beziehungen und kann sich mühelos in die
                    Perspektive anderer Menschen versetzen.
                  </p>
                  <p>
                    „Alles ist schwierig, bevor es einfach ist“
                    <br />
                    „Alles ist schwierig, bevor es einfach ist“.
                  </p>
                  <p>
                    Die Teilnehmer erhalten von ihm einen umfassenden Inhalt in
                    Bezug auf die emotionale Intelligenz, um ihre sozialen
                    Kompetenzen und zwischenmenschlichen Beziehungen zu stärken.
                    Zusätzlich stellt er seine Expertise im Recruiting zur
                    Verfügung, um die passenden Vertriebspartner zu gewinnen und
                    somit eine nachhaltige Reduzierung der Fluktuation im
                    Unternehmen zu erreichen.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image03} alt="Image03" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>SAMUEL RAUWALD</h4>
                <h5>Experte</h5>
                <h6>für Markenaufbau, Sichtbarkeit und Leadgenerierung</h6>
                <div className="left-right">
                  <p>Das macht Samuel Rauwald außergewöhnlich: </p>
                  <p>
                    Er ist der innovative Kopf und Gründer der JESAM Consulting
                    GmbH, ist eine treibende Kraft in der Welt der
                    Softwareentwicklung und des Performance Marketings.
                  </p>
                  <p>
                    Was ihn auszeichnet, ist nicht nur seine technische
                    Expertise, sondern auch seine Fähigkeit, kreative Lösungen
                    zu finden und maßgeschneiderte Softwareprodukte zu
                    entwickeln, die die spezifischen Anforderungen seiner Kunden
                    erfüllen. Sein Engagement für höchste Qualitätsstandards und
                    innovative Ansätze macht ihn zu einem gefragten Partner in
                    der Branche.
                  </p>
                  <p>
                    Mit seinem Team von über 120 erfahrenen Softwareingenieuren
                    und Experten für Performance Marketing treibt Samuel Rauwald
                    die Branche voran, indem er innovative Technologien
                    entwickelt und Kunden dabei hilft, ihr volles digitales
                    Potenzial auszuschöpfen.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
