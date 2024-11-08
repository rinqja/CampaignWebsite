import React, { useEffect } from "react";
import "./impressum.scss";
import Herobanner from "../Home/herobanner";
import Kontact from "../Home/kontact";
export default function Impressum() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Herobanner />
      <div className="container">
        <div className="impressum-all-contnet-alignment">
          <h1>Impressum</h1>
          <h2>
            RICHTUNGS <br /> WECHSEL
          </h2>
          <h3>Registergericht: </h3>
          <span>E-Mail: </span>
          <span>Telefon:</span>
          <div className="contnet">
            <p>vertreten durch die Geschäftsführer: </p>
            <p>
              <b>Verbraucherinformation gemäß Verordnung EU Nr. 524/2013</b>
            </p>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter
              http://ec.europa.eu/consumers/ odr/
            </p>
            <p>Unsere Email-Adresse lautet: impressum@richtungswechsel.de</p>
            <p>
              Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
            </p>
            <p>
              Richtungswechsel ist nicht bereit und verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen. Rechtlicher Hinweis
            </p>
            <p>
              Die Texte, Bilder, Grafiken, Animationen, Video- und Audiodateien
              sowie alle weiteren Inhalte auf dieser Webseite unterliegen den
              gesetzlichen Bestimmungen des Urheberrechts und ggf. weiteren
              Rechten des geistigen Eigentums. Der geschützte Inhalt dieser
              Webseite darf ohne Einwilligung des Rechtsinhabers nicht
              vervielfältigt, verbreitet, wiedergegeben, öffentlich zugänglich
              gemacht oder sonst verwertet werden.Änderungen von Konstruktion,
              Ausstattung und Lieferumfang sowie Abweichungen im Farbton sowie
              Irrtümer bleiben vorbehalten. Alle angegebenen Preise sind
              unverbindlich.
            </p>
          </div>
        </div>
      </div>
      <div className="impressum-contnet-top-alignment">
      <Kontact/>
      </div>
    </div>
  );
}
