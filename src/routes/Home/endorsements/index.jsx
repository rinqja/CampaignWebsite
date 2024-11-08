import React from "react";
import "./kundendie.scss";
import ProfileImage from "../../../assets/imges/patrick.svg";
import ProfileImage2 from "../../../assets/imges/patrickg.svg";
import ProfileImage3 from "../../../assets/imges/green.svg"
export default function EndorsementsSection() {
  return (
    <div>
      <div className="Kundendie-section-all-contnet-alignment" id="referenzen">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <div className="text">
                <h5>KUNDEN DIE AUF UNS BAUEN</h5>
                <p>
                Als Unternehmen stehen wir bei Richtungswechsel fest hinter unseren Kunden. Ihre Ziele sind unsere Antriebskraft, und wir sind stolz darauf, ihnen dabei zu helfen, ihre Visionen zu verwirklichen. Durch unsere engagierte Unterstützung und maßgeschneiderten Lösungen bauen wir nicht nur Geschäftsbeziehungen auf, sondern auch Vertrauen. Bei Richtungswechsel ist es unser oberstes Ziel, unseren Kunden eine solide Grundlage zu bieten, auf der sie erfolgreich bauen können.
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="two-col-grid">
                <div className="two-col-grid-items">
                  <div className="box">
                    <div className="text-child">
                      <p>
                      "Ich muss zugeben, dass ich anfangs nicht überzeugt war, ob dieses Programm das Richtige für mich ist. Aber die Ergebnisse sprechen für sich. Besonders beeindruckt hat mich, wie sich die Leads dank der automatisierten Systeme quasi von selbst finanzieren ohne Abschluss zu berücksichtigen. Das hat meine Perspektive auf Akquise komplett verändert. Onur, mit seinem scharfen Blick für Strategie und Verkauf, hat die Sessions jedes Mal zu einem Highlight gemacht. Verkaufen ist so einfach durch Onur. Mein Einkommen? Innerhalb von wenigen Monaten deutlich gesteigert. Ich hätte nicht gedacht, dass das möglich ist. Ein echter Augenöffner!"
                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage} alt="ProfileImage" />
                      </div>
                      <div>
                        <p>Patrick G.</p>
                        <span>Bremen</span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="text-child">
                      <p>
                      "Dieses Programm hat nicht nur mein Geschäft, sondern auch mich persönlich auf das nächste Level gebracht. Die automatisierte Einarbeitung neuer Vertriebspartner und der Aufbau eines Vertriebsnetzes waren für mich die Highlights. Es hat nicht lange gedauert, und die Investition in das Programm hat sich nicht nur amortisiert, sondern ich habe sogar begonnen, mein Einkommen zu verdoppeln. Die Mischung aus Videoinhalten und Live-Calls, geleitet von einem kompetenten Team, das technisch immer auf dem neuesten Stand ist, hat mir neue Perspektiven eröffnet. Ich kann jedem nur empfehlen, der seinen Markenaufbau ernst nimmt, sich diesem Programm anzuschließen."                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage3} alt="ProfileImage2" />
                      </div>
                      <div>
                        <p>Jonas Z.</p>
                        <span>Hannover</span>
                    
                      </div>
                    </div>
                  </div>
                </div>
                <div className="two-col-grid-items">
                  <div className="box">
                    <div className="text-child">
                      <p>
                      "Von Anfang an war ich von der Qualität dieses Programms beeindruckt. Die Art und Weise, wie Werbeanzeigen für Mandanten so gestaltet werden, dass sie sich selbst finanzieren, selbst ohne Abschluss, hat mein Geschäft revolutioniert. Aber was wirklich den Unterschied ausmacht, ist die Gemeinschaft und die Unterstützung durch das Team. Jeder Live-Call hat mir das Gefühl gegeben, Teil von etwas Größerem zu sein. Die Investition in das Programm war nicht nur eine finanzielle Entscheidung, sondern auch eine Investition in die Zukunft meines Unternehmens. Wer nachhaltigen Erfolg anstrebt, ist hier genau richtig."                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage2} alt="ProfileImage3" />
                      </div>
                      <div>
                        <p>Giovanni T.</p>
                        <span>Göppingen</span>
                    
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="text-child">
                      <p>
                      "Was mich an diesem Programm am meisten beeindruckt hat, ist die Kombination aus praktischen Werkzeugen und dem tiefen Verständnis für den Markt, das das Team mitbringt. Sam hat die Kunst der Werbeanzeigen für den Vertriebsaufbau und die Kundengewinnung perfektioniert, was mir geholfen hat, meine Marketingstrategie komplett neu zu denken. Die Videoinhalte? Hervorragend und leicht verständlich. Doch der wahre Gamechanger waren die Live-Calls – sie haben mir Einblicke geboten, die man nirgendwo anders bekommt. Mein Umsatz hat sich fast verdreifacht, ohne dass ich mehr Termine wahrnehmen musste. Empfehlenswert für jeden, der im Finanzdienstleistungssektor ernsthaft vorankommen will."                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage3} alt="ProfileImage3" />
                      </div>
                      <div>
                        <p>Lisa B.</p>
                        <span>Geschäftsführer</span>
                        <span>Musterunternehmen GmbH</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
