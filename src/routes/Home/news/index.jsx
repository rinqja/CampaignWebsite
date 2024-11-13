import React from "react";
import { useRef,useEffect,useState } from "react";
import "./richtungswechselsection.scss";
import TrueIcon from "../../../assets/icons/true-two.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";

export default function NewsSection() {

  const playerContainerRef = useRef(null);
  
  const [showAll, setShowAll] = useState(false);

  const iconGrids = [
    { text: "Community Engagement: Our recent town hall meetings have shown strong support for our education reform initiatives, with over 500 residents participating in productive discussions." },
    { text: "Infrastructure Development: Successfully secured funding for three new community centers, demonstrating our commitment to creating spaces for community gatherings and youth programs." },
    { text: "Healthcare Initiative: Launched a new partnership with local medical facilities to improve access to preventive care services for all residents." },
    { text: "Economic Growth: Implemented new programs supporting local businesses, resulting in the creation of 200+ new jobs in our district." },
    { text: "Environmental Action: Initiated green energy projects that will reduce our community's carbon footprint by 30% over the next five years." },
    { text: "Public Safety: Enhanced community policing programs have led to a significant decrease in neighborhood crime rates." },
    { text: "Education Excellence: Secured additional funding for after-school programs, benefiting over 1,000 students in our district." },
    { text: "Senior Services: Expanded support services for elderly residents, including new transportation and home care assistance programs." },
    { text: "Youth Development: Launched new vocational training programs in partnership with local businesses to create career opportunities for young adults." },
    { text: "Fiscal Responsibility: Maintained balanced budgets while increasing investment in essential community services." }
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
          <h4>LATEST UPDATES FROM THE CAMPAIGN</h4>
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
  <h5>CAMPAIGN HIGHLIGHTS</h5>
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
        <h5>CAMPAIGN HIGHLIGHTS</h5>
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
          <span>View More Updates</span>
          <img src={ArrowIcon} alt="ArrowIcon" />
       
      </div>
       
      </div>
    </div>
  );
}
