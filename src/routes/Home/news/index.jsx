import React from "react";
import { useRef, useEffect, useState } from "react";
import "./richtungswechselsection.scss";
import TrueIcon from "../../../assets/icons/true-two.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";

export default function NewsSection() {

  const playerContainerRef = useRef(null);

  const [showAll, setShowAll] = useState(false);

  const iconGrids = [
    { text: "Angazhimi me Komunitetin: Takimet tona të fundit me banorët kanë treguar mbështetje të madhe për iniciativat tona të reformës në arsim, me mbi 500 qytetarë që morën pjesë në diskutime të frytshme." },
    { text: "Zhvillimi i Infrastrukturës: Siguruam financim për ndërtimin e tre qendrave të reja komunitare, duke dëshmuar përkushtimin tonë për krijimin e hapësirave për tubime të komunitetit dhe programe për të rinjtë." },
    { text: "Iniciativa në Kujdesin Shëndetësor: Nisëm një partneritet të ri me institucionet lokale shëndetësore për të përmirësuar aksesin në shërbimet parandaluese për të gjithë banorët." },
    { text: "Rritja Ekonomike: Zbatuam programe të reja që mbështesin bizneset lokale, duke rezultuar në krijimin e mbi 200 vendeve të reja të punës në distriktin tonë." },
    { text: "Aksion për Mjedisin: Inicuam projekte të energjisë së gjelbër që do të ulin gjurmën tonë të karbonit me 30% gjatë pesë viteve të ardhshme." },
    { text: "Siguria Publike: Përmirësuam programet e policimit komunitar, duke çuar në një ulje të ndjeshme të shkallës së krimit në lagjet tona." },
    { text: "Shkëlqyeshmeria në Arsim: Siguruam financim shtesë për programet pas shkollës, duke përfituar mbi 1,000 studentë në distriktin tonë." },
    { text: "Shërbime për të Moshuarit: Zgjeruam shërbimet mbështetëse për banorët e moshuar, duke përfshirë transport të ri dhe programe ndihmëse në shtëpi." },
    { text: "Zhvillimi i Rinisë: Nisëm programe të reja trajnimi profesional në partneritet me bizneset lokale për të krijuar mundësi karriere për të rinjtë." },
    { text: "Përgjegjësia Fiskale: Mbajtëm buxhete të balancuara duke rritur investimet në shërbimet thelbësore të komunitetit." }
  ];


  const iconGridsToShow = showAll ? iconGrids : iconGrids.slice(0, 4);


  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector("script[src='https://player.vimeo.com/api/player.js']")) {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Script has loaded
        // Initialize Vimeo player or related functionality here
      };
    }
  }, []);
  return (
    <div className="richtungswechsel-section-all-contnet-alignment">
      <div className="text" id="news">
        <h4>LAJMET E FUNDIT NGA FUSHATA</h4>
        <div className="line"></div>

      </div>

      <div className="container3">
        <div className="video-wrapper">
          <div className="video-center">
            <iframe
              src="https://player.vimeo.com/video/1030024639?h=e9d9e42d23"
              frameborder="0"
              allow="fullscreen; picture-in-picture"
              style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
              title="Richtungswechsel">
            </iframe>
          </div>
          <div className="header-mobile">
            <h5>MOMENTET KRYESORE TË FUSHATËS</h5>
          </div>
        </div>
        {/* <div className="line"></div> */}
        {/* <div className="sec-text">
          <p>
            Stell dir vor, jemand sucht genau nach dir, weil er von deiner Marke
            beeindruckt ist. Das ist die Magie selbstgenerierter Leads.
          </p>
          <p>
         
Statt Leads zu kaufen, warum nicht besser die Kraft deiner eigenen Marke nutzen? Mit Leads, die du selbst generierst, sind die Leute bereits interessiert an dem, was du zu bieten hast. Sie vertrauen dir und sind bereit für den nächsten Schritt. Das macht nicht nur den ersten Kontakt
 einfacher, sondern erhöht auch deine Erfolgschancen.
          </p>

          <p>
            <b>Die Vorteile klar vor Augen:</b>
          </p>
          <span>
            <b>* Top Qualität:</b> Leads, die wissen, was du anbietest.
          </span>
          <span>
            <b>* Mehr Vertrauen:</b> Durch deine Marke schon einen Schritt
            voraus.
          </span>
          <span>
            <b>* Höhere Erfolgsrate:</b> Kein Kontaktwettlauf mit anderen
            Anbietern.
          </span>
        </div> */}
        <div className="heading" id="heading">
          <h5>MOMENTET KRYESORE TË FUSHATËS</h5>
        </div>

        <div className="icon-grid-container">
          {iconGridsToShow.map((grid, index) => (
            <div className="icon-grid" key={index}>
              <span>{grid.text}</span>
              <img src={TrueIcon} alt="TrueIcon" />
            </div>
          ))}
        </div>

        <div onClick={() => setShowAll(true)} className="arrow-design">
          <span>Mëso më shumë</span>
          <img src={ArrowIcon} alt="ArrowIcon" />

        </div>

      </div>
    </div>
  );
}
