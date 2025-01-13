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
            <h2>PRIORITETET KRYESORE</h2>
          </div>
        </AnimatedSection>
        <div className="box-center-alignment">
          <div className="box">
            <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Reforma në Arsim: Modernizimi i shkollave tona dhe rritja e
                  aksesit në arsim cilësor për të gjithë nxënësit, pavarësisht prejardhjes së tyre.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={500}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>Zhvillimi Ekonomik: Krijimi i mundësive për punësim dhe mbështetja e bizneseve
                  lokale përmes iniciativave të synuara dhe reduktimit të burokracisë.</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>Aksesi në Kujdesin Shëndetësor: Përmirësimi i objekteve mjekësore dhe sigurimi
                  i shërbimeve shëndetësore të përballueshme për të gjithë anëtarët e komunitetit.</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={650}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span> Mbrojtja e Mjedisit: Zbatimi i politikave të qëndrueshme dhe iniciativave të
                  gjelbra për të mbrojtur mjedisin tonë për brezat e ardhshëm.</span>
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
                  SHKËPUTJE <br />
                  NGA E <br />
                  KALUARA
                </h3>

                <div className="relative-div1">
                  <span>{`->`} Inefiçencë Burokratike</span>
                  <img src={RedIcon2} alt="RedIcon2" />
                </div>
                <div className="relative-div-3">
                  <span>{`->`} Shërbime Publike të Pamjaftueshme</span>
                  <img src={RedIcon3} alt="RedIcon3" />
                </div>
                <div className="relative-div-4">
                  <span>
                    <span>{`->`} Politika të Vjetruara</span>

                  </span>
                  <img src={RedIcon4} alt="RedIcon4" />
                </div>

              </div>
              <a href="#kontact">
                <button>Mëso më shumë</button>
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="grid-items">
              <div>
                <h3>
                  KOHA PËR TË   <br /> MODERNIZUAR<br />
                  QASJEN TONË
                </h3>
                <div className="text">
                  <p>
                    {`->`} Rrugë të reja, mundësi të reja! </p>
                  <p>
                    {`->`}  Po krijojmë një sistem modern të qeverisjes.

                  </p>
                  <p>
                    {`->`}
                    Me ekspertë dhe liderë, ndërtojmë të ardhmen.  </p>
                </div>
              </div>
              <a href="#Leistungen">
                <button>Mëso më shumë</button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
