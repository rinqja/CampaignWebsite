import React from "react";
import "./getinvolved.scss";
import ManImage from "../../../assets/imges/man.png";
import MobileManImage from "../../../assets/imges/mobile-men.png";
import BoxImage from "../../../assets/imges/box.svg";
export default function GetInvolvedSection() {
  return (
    <div className="richtungs-section-all-contnet-alignment" id="uberuns">
      <div className="grid">
        <div className="grid-items">
          <div className="img">
            <img src={ManImage} alt="ManImage" />
            <img src={MobileManImage} alt="MobileManImage" />
          </div>
          <div className="imguppertext">
            <div className="spacer">
              <div className="text-style">
                <h5>“</h5>
                <h6>
                  FÜR <br />
                  MAXIMALEN
                  <br /> ERFOLG
                </h6>
              </div>
              <div className="left-content-alignment">
                <div className="line"></div>
                <span>Onur, Gründer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="box">
            <div className="box-image">
              <img src={BoxImage} alt="BoxImage" />
            </div>
            <h2>RICHTUNGS WECHSEL</h2>
            <span>
              Hast du dich jemals gefragt, welcher Schlüssel zu einem wirklich
              effektiven Finanzvertrieb ist? „Richtungswechsel“ könnte die
              Antwort sein, nach der du gesucht hast.
            </span>
            <span>
              Stell dir „Richtungswechsel“ als die optimale Verschmelzung von
              Consulting und Agenturdienstleistungen vor. Aber nicht irgendeine
              Kombination – sie ist maßgeschneidert für Finanzberater,
              Handelsvertreter, Makler und Führungskräfte wie dich.
            </span>
            <p>
              Wie oft hast du Dienstleistungen in Anspruch genommen, die
              entweder eine Beratungs- oder Agenturkomponente vermissen ließen?
              Oder Anbieter, die einfach nicht die erforderliche
              Branchenkenntnis mitbrachten?
            </p>
            <p>
              Wir sind aus der Praxis, für die Praxis. „Richtungswechsel“ hat
              seine Wurzeln tief in der Finanzdienstleistungsbranche. Alles, was
              wir tun – von unserem Expertenteams über unsere innovativen
              Strategien bis hin zu unseren einzigartigen Prozessen und
              modernsten bewährten Technologielösungen – wurde mit einem klaren
              Ziel vor Augen entwickelt: Den Finanzvertrieb zu revolutionieren.
            </p>
            <p>
              Spürst du den Drang, mehr zu erfahren? Dann zögere nicht.
              Kontaktiere uns jetzt und erfahre, wie „Richtungswechsel“ den
              Unterschied in deinem Geschäft machen kann.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
