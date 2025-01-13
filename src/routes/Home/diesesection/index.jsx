import React from "react";
import "./diesesection.scss";
import TrueIcon from "../../../assets/icons/true.svg";
import RedIcon from "../../../assets/imges/red.png";
import RedIcon2 from "../../../assets/imges/two.png";
import RedIcon3 from "../../../assets/imges/three.png";
import RedIcon4 from "../../../assets/imges/four.png";
import AnimatedSection from "../../../components/Animation";
export default function Diesesection() {
  return (
    <div className="diesesection-all-contnet-alignment">
      <div className="container2">
        <AnimatedSection animationType="fade-up" duration={1000} delay={300}>
          <div className="text">
            <h2>SFIDAT QË NE DO T'I ZGJIDHIM BASHKË!</h2>
          </div>
        </AnimatedSection>
        <div className="box-center-alignment">
          <div className="box">
            <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Nuk ka ekonomi të qëndrueshme pa politika që mbështesin qytetarin!
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={500}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Mungesa e investimeve direkte është një sfidë që ne do ta përballojmë.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Çdo qytetar ka të drejtën për një jetë më të mirë dhe më dinjitoze.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={650}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Do të sigurojmë mundësi për të gjithë që të ndërtojnë suksesin e tyre.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={700}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Luftojmë për stabilitet dhe zhvillim të vazhdueshëm ekonomik.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={750}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Ne mbështesim transparencën dhe modernizimin e shërbimeve publike.
                </span>
              </div>
            </AnimatedSection>  
            <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Të gjithë meritojnë mundësi të barabarta dhe të drejta për të ardhmen.
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="fade-up" duration={1000} delay={850}>
              <div className="icon-text">
                <img src={TrueIcon} alt="TrueIcon" />
                <span>
                  Mentaliteti i ri është kyçi për suksesin e përbashkët.
                </span>
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
                  FUND
                  PREMTIMEVE <br />
                  BOSHE
                </h3>
                <div className="relative-div1">
                  <span>{`->`} Premtime të pambajtura</span>
                  <img src={RedIcon2} alt="RedIcon2" />
                </div>
                <div className="relative-div-3">
                  <span>{`->`} Politika pa vizion  </span>
                  <img src={RedIcon3} alt="RedIcon3" />
                </div>
                <div className="relative-div-4">
                  <span>
                    {`->`} Përfitime të pabarabarta
                  </span>
                  <img src={RedIcon4} alt="RedIcon4" />
                </div>
              </div>

            </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="grid-items">
              <div>
                <h3>
                  KOHA PËR NDRYSHIM <br />
                  DHE ZHVILLIM
                </h3>
                <div className="text">
                  <div className="relative-4">
                    <span>
                      {`->`}              Ekonomi për të gjithë

                    </span>

                  </div>
                  <div className="relative-4">
                    <span>
                      {`->`}     Investime të reja
                    </span>

                  </div>
                  <div className="relative-4">
                    <span>
                      {`->`} Transparencë për të gjithë
                    </span>

                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
