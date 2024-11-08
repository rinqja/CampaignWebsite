import React from "react";
import "./richtungswechsel.scss";
import ArrowIcon from "../../../assets/icons/arrow.svg";
export default function Richtungswechsel() {
  return (
    <div className="richtungswechsel-sapcer">
      <div className="container">
        <div className="richtungswechsel-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <p>RICHTUNGS WECHSEL</p>
            </div>
            <div className="grid-items">
              <h1>VERTRIEB NEU DEFINIERT!</h1>
              <span>
                Wir zeigen wir dir, wie du als Finanzdienstleister durch die
                Implementierung hochmoderner Automatisierungstechniken in der
                Lage bist, kontinuierlich und hervorragend erstklassige
                Empfehlungen zu generieren.
              </span>
              <span>
                Darüber hinaus wirst du Schritt für Schritt lernen, wie du
                digitale Strategien und innovative Marketingansätze gezielt
                einsetzt, um eine konstante Flut von neuen Kunden zu gewinnen.
                Durch die Kombination dieser Maßnahmen wirst du nicht nur
                bestehende Kunden besser betreuen, sondern auch deinen Umsatz
                vervielfachen können.
              </span>
              <div className="btn-alignment">
                <a href="#kontact">
                  <button>Erstgespräch vereinbaren</button>
                </a>
                <a href="#uberuns">Über uns</a>
              </div>
            </div>
          </div>
          <a href="#Leistungen">
            <div className="arrow-text">
              <span>mehr erfahren</span>
              <img src={ArrowIcon} alt="ArrowIcon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
