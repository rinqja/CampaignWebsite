import React from "react";
import { useRef,useEffect,useState } from "react";
import "./richtungswechselsection.scss";
import TrueIcon from "../../../assets/icons/true-two.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";

export default function Richtungswechselsection() {

  const playerContainerRef = useRef(null);
  
  const [showAll, setShowAll] = useState(false);

const iconGrids = [
  { text: "Zielgruppenorientierung: Die Leads, die du selbst generierst, passen oft besser zu deinem Angebot, da sie aufgrund deiner spezifischen Inhalte und Marketingmaßnahmen zu dir gefunden haben." },
  { text: "Kosteneffizienz: Langfristig gesehen, kann das Generieren eigener Leads kosteneffizienter sein, da du nicht ständig für jeden neuen Lead zahlen musst." },
  { text: "Exklusivität: Diese Leads gehören nur dir. Bei gekauften Leads besteht die Gefahr, dass diese mehrfach verkauft und von mehreren Unternehmen kontaktiert werden." },
  { text: "Bessere Kundenbeziehung: Da die Leads schon mit deiner Marke vertraut sind, können Beziehungen schneller und tiefer aufgebaut werden." },
  { text: "Transparentere Daten: Du weißt genau, woher deine Leads kommen und wie sie generiert wurden, was dir wertvolle Einblicke in deine Zielgruppe gibt." },
  { text: "Flexibilität: Du kannst deine Strategien und Kampagnen jederzeit anpassen, um bessere Ergebnisse zu erzielen, anstatt von Dritten abhängig zu sein." },
  { text: "Nachhaltigkeit: Mit einer soliden Strategie zur Lead-Generierung baust du kontinuierlich und nachhaltig an deiner Kundenbasis." },
  { text: "Höhere Kundenbindung: Selbstgenerierte Leads tendieren dazu, loyalere Kunden zu werden, da sie aus echtem Interesse und nicht durch Massenmarketing zu dir gekommen sind." },
  { text: "Bessere Vorqualifizierung: Du kannst den Prozess so steuern, dass du genau die Leads ansprichst, die am besten zu deinen Produkten oder Dienstleistungen passen." },
  { text: "Markenschutz: Da du die Kontrolle über den gesamten Prozess hast, stellst du sicher, dass deine Marke immer im besten Licht präsentiert wird." }
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
       <div className="text">
          <h4>WARUM SELBSTGENERIERTE LEADS UNSCHLAGBAR SIND</h4>
          <div className="line"></div>

        </div>
        
      <div className="container3">
      <div className="video-wrapper">
  <div className="video-center">
    <iframe 
      src="https://player.vimeo.com/video/917874891?badge=0&amp;player_id=0&amp;app_id=58479&amp;background=0" 
      frameborder="0" 
      allow="fullscreen; picture-in-picture" 
      style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} 
      title="Richtungswechsel">
    </iframe>
  </div>
  <div className="header-mobile">
          <h5>MIT RICHTUNGSWECHSEL ERHÄLST DU</h5>
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
        <div className="heading">
          <h5>MIT RICHTUNGSWECHSEL ERHÄLST DU</h5>
         </div>
        
        <div className="icon-grid-container">
        {iconGridsToShow.map((grid, index) => (
          <div className="icon-grid" key={index}>
            <span>{grid.text}</span>
            <img src={TrueIcon} alt="TrueIcon" />
          </div>
        ))}
      </div>
    
        <div onClick={() => setShowAll(true)}className="arrow-design">
          <span>mehr erfahren</span>
          <img src={ArrowIcon} alt="ArrowIcon" />
       
      </div>
       
      </div>
    </div>
  );
}
