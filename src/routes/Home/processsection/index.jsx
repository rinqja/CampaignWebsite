import React, { useState } from "react";
import "./processsection.scss";
import DownIcon from '../../../assets/icons/new-down.svg';
import AnimatedSection from "../../../components/Animation";
export default function Processsection() {
  const [ toogle , setToogle ] = useState(false);
  return (
    <div className="process-section-all-contnet-alignment">
      <div className="container5">
        <div className="grid">
        <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
          <div className="grid-items spacer-left">
            <h6>01</h6>
            <p>Erstgespräch</p>
            <span>
              Wie kann ich mich für euer Coaching anmelden? Unsere
              Coaching-Sitzungen sind intensiv und zielgerichtet, weshalb wir
              nur eine begrenzte Anzahl von Personen betreuen. Um herausragende
              Ergebnisse zu gewährleisten, legen wir Wert auf diese
              Exklusivität. Solltest du den Wunsch haben, Teil unseres
              exklusiven Netzwerks zu werden und deinen Weg zu außergewöhnlichem
              Erfolg zu beginnen, kannst du dich für ein kostenloses
              Strategiegespräch bewerben.
            </span>
          </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
          <div className="grid-items">
            <h6>02</h6>
            <p>Strategiegespäch</p>
            <span>
              Was passiert während des virtuellen Strategiegesprächs? Das
              30-minütige virtuelle Strategiegespräch bietet dir die
              Gelegenheit, tiefe Einblicke in unsere bewährten Systeme und
              Methoden zu erhalten. Wir präsentieren dir maßgeschneiderte
              Lösungen, um genau auf deine Bedürfnisse und Herausforderungen
              einzugehen. Dieser Dialog ermöglicht es uns, gemeinsam den besten
              Weg für deine zukünftigen Erfolge zu identifizieren.
            </span>
          </div>
          </AnimatedSection>
          <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
          <div className="grid-items">
            <h6>03</h6>
            <p>Zusammenarbeit</p>
            <span>
              Wie geht es nach dem Strategiegespräch weiter? Nach dem
              Strategiegespräch hast du die Möglichkeit, eine langfristige
              Zusammenarbeit mit uns einzugehen. Mit unserer Unterstützung und
              Begleitung kannst du sicher sein, dass du bei der Erreichung und
              Umsetzung deiner Ziele nicht alleine bist. Wir sind an deiner
              Seite, um sicherzustellen, dass du erfolgreich und zielgerichtet
              vorankommst.
            </span>
          </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="container6" id="faq">
        <div className="sub-heading">
          <h5>DAS SOLLTEST DU WISSEN</h5>
        </div>
        <div className="main-grid main-grid-mobile-hide">
          <div className="main-grid-items">
            <div class="flip-card one">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                  Was kann ich von <br/> dem kostenlosen <br/> Strategiegespräch <br/> erwarten?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Im Strategiegespräch bieten wir dir die Chance,
                    tiefgreifend über deine Ziele und Herausforderungen zu
                    sprechen. Wir gehen gemeinsam mit dir deine aktuelle Lage
                    durch und entwickeln darauf basierend maßgeschneiderte
                    Strategien. Du bekommst präzise Einblicke, wie du effektiv
                    deine Ziele erreichst und sowohl deinen geschäftlichen als
                    auch persönlichen Erfolg steigerst. Es ist der ideale
                    Einstieg, um den Pfad zu außergewöhnlichem Erfolg zu
                    betreten.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card two">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Für wen ist dieses <br/> Mentoring- <br/> Programm geeignet?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Programm ist für Finanzberater, Handelsvertreter, Makler
                    und Führungskräfte konzipiert, die ihre Karriere auf die
                    nächste Stufe heben und von branchenführenden Experten
                    lernen möchten.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card three">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Werden die <br/> Mentoring-Sitzungen <br/> persönlich oder <br/> online
                    durchgeführt?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Primär werden unsere Mentoring-Sitzungen online
                    durchgeführt, um Flexibilität und Zugänglichkeit für alle
                    Teilnehmer unabhängig von ihrem Standort zu gewährleisten.
                    Dies ermöglicht eine konsequente und regelmäßige Betreuung.
                    Allerdings gibt es spezielle Anlässe, bei denen persönliche
                    Treffen von großem Wert sein können. Bei solchen
                    Gelegenheiten, wie Workshops, Gastauftritten oder intensiven
                    Trainingseinheiten, kann es zu persönlichen Zusammentreffen
                    kommen, um den Lernerfolg und die Vernetzung zu maximieren.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card new2">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Welche Kosten sind <br/> mit dem Mentoring- <br/>Programm <br/> verbunden?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Die Kosten variieren je nach Umfang und Dauer des Programms.
                    Wir empfehlen, sich direkt mit uns in Verbindung zu setzen,
                    um Details und ein individuelles Angebot zu erhalten.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-grid-items">
            <div class="flip-card new1">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                  Was unterscheidet <br/> eure Herangehens - <br/> weise bei der Kunden <br/>  und <br/> Vertriebspartnerge - <br/>winnung  vom <br/> üblichen <br/> Marktansatz?

                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Unser Ansatz unterscheidet sich durch den Einsatz
                    von digitalen Werkzeugen, die wir intensiv getestet und
                    verfeinert haben. Wir setzen auf organische, strategische
                    Techniken, die gezielt auf die Neukundenakquise und
                    Vertriebspartnerbindung abzielen.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card four">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Wie lange dauert  das <br/> Mentoring- <br/> Programm?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Die Dauer des Programms kann variieren, je nach
                    individuellen Bedürfnissen und Zielen des Teilnehmers. In
                    der Regel umfasst es jedoch mehrere Wochen intensiver
                    Schulung und Betreuung.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card nine">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Gibt es eine <br/> Zertifizierung oder <br/> Anerkennung nach <br/> Abschluss
                    des <br/> Programms?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    a, nach erfolgreichem Abschluss des Mentoring-Programms
                    erhalten die Teilnehmer ein Zertifikat von
                    "Richtungswechsel", das ihre erworbenen Kenntnisse und
                    Fähigkeiten bestätigt.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card new3">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Wie unterscheidet <br/> sich "Richtungs- <br/>wechsel" von <br/> anderen
                    Mentoring-<br/> Programmen in der <br/> Branche?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    "Richtungswechsel" kombiniert Consulting- und
                    Agenturdienstleistungen und bietet damit eine umfassende
                    Betreuung. Unsere Mentoren sind Branchenexperten mit über 15
                    Jahre praktischer Erfahrung und unser Ansatz ist
                    maßgeschneidert, um die individuellen Bedürfnisse jedes
                    Teilnehmers zu erfüllen.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-grid-items">
            <div class="flip-card five">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Weshalb seid ihr die <br /> richtigen <br /> Ansprechpartner{" "}
                    für  <br /> mich?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Wir sind nicht nur Berater, sondern selbst
                    Finanzdienstleister mit über 16 Jahren Erfahrung in der
                    Branche. Dies bedeutet, dass wir nahezu jede Herausforderung
                    kennen, von Umsatzschwierigkeiten über Kundenakquise bis hin
                    zu internen Prozessen und Online-Präsenz. All diese
                    Herausforderungen haben wir erfolgreich gemeistert. Wenn du
                    also vor einer der genannten Hürden stehst, sind wir bereit,
                    unsere erprobten Lösungen mit dir zu teilen.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card six">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                  Was genau ist das <br/> Mentoring- <br/> Programm von <br/> "Richtungs- <br/> wechsel"?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Mentoring-Programm von "Richtungswechsel" ist eine
                    maßgeschneiderte Beratungs- und Unterstützungsinitiative,
                    die darauf abzielt, Fachleuten in der
                    Finanzdienstleistungsbranche dabei zu helfen, ihre
                    Fähigkeiten zu verbessern, ihre Ziele zu erreichen und im
                    Markt erfolgreich zu sein.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card seven">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Welche Themen <br/> werden im <br/> Mentoring-<br/>Programm<br/> abgedeckt?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Programm deckt eine breite Palette von Themen ab,
                    darunter effektive Vertriebsstrategien, automatisierte
                    Kunden- und Mitarbeitergewinnung, einzigartige
                    digitalisierte Prozesse, innovative Technologielösungen und
                    persönliche Entwicklung.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card eight">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Wie kann ich mich für  <br/> das Mentoring- <br/> Programm <br/> anmelden?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Um dich für unser Mentoring-Programm anzumelden, kontaktiere
                    uns bitte direkt über unsere Website oder per E-Mail. Unser
                    Team wird sich dann mit dir in Verbindung setzen, um den
                    nächsten Schritte zu besprechen.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-grid main-grid-mobile-show">
          
            <div class="flip-card one">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                  Was kann ich von dem kostenlosen Strategie -gespräch erwarten?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Im Strategiegespräch bieten wir dir die Chance,
                    tiefgreifend über deine Ziele und Herausforderungen zu
                    sprechen. Wir gehen gemeinsam mit dir deine aktuelle Lage
                    durch und entwickeln darauf basierend maßgeschneiderte
                    Strategien. Du bekommst präzise Einblicke, wie du effektiv
                    deine Ziele erreichst und sowohl deinen geschäftlichen als
                    auch persönlichen Erfolg steigerst. Es ist der ideale
                    Einstieg, um den Pfad zu außergewöhnlichem Erfolg zu
                    betreten.
                  </span>
                </div>
              </div>
            </div>
          <div className={toogle ? "new-show" : "new-hide" }>
            <div class="flip-card two">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Für wen ist dieses Mentoring-Programm geeignet?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Programm ist für Finanzberater, Handelsvertreter, Makler
                    und Führungskräfte konzipiert, die ihre Karriere auf die
                    nächste Stufe heben und von branchenführenden Experten
                    lernen möchten.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card three">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Werden die Mentoring-Sitzungen persönlich oder online
                    durchgeführt?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Primär werden unsere Mentoring-Sitzungen online
                    durchgeführt, um Flexibilität und Zugänglichkeit für alle
                    Teilnehmer unabhängig von ihrem Standort zu gewährleisten.
                    Dies ermöglicht eine konsequente und regelmäßige Betreuung.
                    Allerdings gibt es spezielle Anlässe, bei denen persönliche
                    Treffen von großem Wert sein können. Bei solchen
                    Gelegenheiten, wie Workshops, Gastauftritten oder intensiven
                    Trainingseinheiten, kann es zu persönlichen Zusammentreffen
                    kommen, um den Lernerfolg und die Vernetzung zu maximieren.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card new2">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Welche Kosten sind mit dem Mentoring-Programm verbunden?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Die Kosten variieren je nach Umfang und Dauer des Programms.
                    Wir empfehlen, sich direkt mit uns in Verbindung zu setzen,
                    um Details und ein individuelles Angebot zu erhalten.
                  </span>
                </div>
              </div>
            </div>
         

            <div class="flip-card new1">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Was <br /> unterscheidet <br /> eure <br /> Herangehens-{" "}
                    <br /> weise bei der <br /> Kunden- und <br />
                    Vertriebspartnerg <br />
                    ewinnung vom <br /> üblichen <br /> Marktansatz?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Unser Ansatz unterscheidet sich durch den Einsatz
                    von digitalen Werkzeugen, die wir intensiv getestet und
                    verfeinert haben. Wir setzen auf organische, strategische
                    Techniken, die gezielt auf die Neukundenakquise und
                    Vertriebspartnerbindung abzielen.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card four">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Wie lange dauert das Mentoring-Programm?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Die Dauer des Programms kann variieren, je nach
                    individuellen Bedürfnissen und Zielen des Teilnehmers. In
                    der Regel umfasst es jedoch mehrere Wochen intensiver
                    Schulung und Betreuung.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card nine">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Gibt es eine Zertifizierung oder Anerkennung nach Abschluss
                    des Programms?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    a, nach erfolgreichem Abschluss des Mentoring-Programms
                    erhalten die Teilnehmer ein Zertifikat von
                    "Richtungswechsel", das ihre erworbenen Kenntnisse und
                    Fähigkeiten bestätigt.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card new3">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Wie unterscheidet sich "Richtungs-wechsel" von anderen
                    Mentoring-Programmen in der Branche?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    "Richtungswechsel" kombiniert Consulting- und
                    Agenturdienstleistungen und bietet damit eine umfassende
                    Betreuung. Unsere Mentoren sind Branchenexperten mit über 15
                    Jahre praktischer Erfahrung und unser Ansatz ist
                    maßgeschneidert, um die individuellen Bedürfnisse jedes
                    Teilnehmers zu erfüllen.
                  </span>
                </div>
              </div>
            </div>
        
       
            <div class="flip-card five">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Weshalb seid ihr <br /> die richtigen <br /> Ansprechpartner{" "}
                    <br /> für mich?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                     Wir sind nicht nur Berater, sondern selbst
                    Finanzdienstleister mit über 16 Jahren Erfahrung in der
                    Branche. Dies bedeutet, dass wir nahezu jede Herausforderung
                    kennen, von Umsatzschwierigkeiten über Kundenakquise bis hin
                    zu internen Prozessen und Online-Präsenz. All diese
                    Herausforderungen haben wir erfolgreich gemeistert. Wenn du
                    also vor einer der genannten Hürden stehst, sind wir bereit,
                    unsere erprobten Lösungen mit dir zu teilen.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card six">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>
                    Was genau ist das <br /> Mentoring- <br />
                    Programm von <br /> "Richtungswechs
                    <br />
                    el"?
                  </p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Mentoring-Programm von "Richtungswechsel" ist eine
                    maßgeschneiderte Beratungs- und Unterstützungsinitiative,
                    die darauf abzielt, Fachleuten in der
                    Finanzdienstleistungsbranche dabei zu helfen, ihre
                    Fähigkeiten zu verbessern, ihre Ziele zu erreichen und im
                    Markt erfolgreich zu sein.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card seven">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Welche Themen werden im Mentoring-Programm abgedeckt?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Das Programm deckt eine breite Palette von Themen ab,
                    darunter effektive Vertriebsstrategien, automatisierte
                    Kunden- und Mitarbeitergewinnung, einzigartige
                    digitalisierte Prozesse, innovative Technologielösungen und
                    persönliche Entwicklung.
                  </span>
                </div>
              </div>
            </div>
            <div class="flip-card eight">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Wie kann ich mich <br/> für das Mentoring- <br/> Programm <br/> anmelden?</p>
                </div>
                <div class="flip-card-back">
                  <span>
                    Um dich für unser Mentoring-Programm anzumelden, kontaktiere
                    uns bitte direkt über unsere Website oder per E-Mail. Unser
                    Team wird sich dann mit dir in Verbindung setzen, um den
                    nächsten Schritte zu besprechen.
                  </span>
                </div>
              </div>
            </div>

            </div>
        
        </div>
        <div className="h-m">
        <div className="new-contnet-alignment-design-style" onClick={()=> setToogle(!toogle)}>
<a>Mehr sehen</a>
<img className={toogle ? "animation-time rotate" : "animation-time" } src ={DownIcon} alt="DownIcon"/>
        </div>
        </div>
      </div>
    </div>
  );
}
