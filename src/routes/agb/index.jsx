import React, { useEffect } from "react";
import  "./agb.scss";
import Herobanner from "../Home/herobanner";
import Kontact from "../Home/kontact";
export default function Agb() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <div>
      <Herobanner />
      <div className="container">
        <div className="agb-box">
          <h1>AGB</h1>
          <h2>l. Allgemeine Regelungen</h2>
          <h3>1. Geltungsbereich</h3>
          <p>
            1.1. Im folgenden finden sich die Allgemeinen Geschäftsbedingungen
            (AGB genannt), die ausschließlich für alle Verträge, zwischen Onur
            Yildiz, Birkenwaldstraße 29, 70191, Stuttgart (nachfolgend
            „Richtungswechsel“) und ihren Kunden gelten, sofern es sich dabei um
            Unternehmer, Kaufleute, juristische Personen des öffentlichen Rechts
            oder öffentlich- rechtliche Sondervermögen (nachfolgend als „Kunde“
            bezeichnet) handelt.
          </p>
          <p>
            1.2. Diese AGB haben ausschließliche Gültigkeit. Abweichende,
            entgegenstehende oder ergänzende AGB des Kunden werden nur dann und
            insoweit Vertragsbestandteil, als Richtungswechsel ihrer Geltung
            ausdrücklich zugestimmt hat. Dieses Zustimmungserfordernis gilt in
            jedem Fall, auch wenn Richtungswechsel trotz Kenntnis der AGB des
            Kunden vorbehaltlos mit der Erbringung der Dienstleistungen beginnt.
          </p>
          <h3>2. Vertragsschluss</h3>
          <p>
            2.1. Sofern in einem Angebot von Richtungswechsel nichts
            Abweichendes schriftlich vereinbart wurde, sind die Angebote von
            Richtungswechsel stets unverbindlich.
          </p>
          <p>
            2.2. Ein Vertrag zwischen Richtungswechsel und dem Kunden kann
            sowohl fernmündlich (z.B. Videochat oder Telefon) als auch
            schriftlich abgeschlossen werden. Sobald der Vertrag fernmündlich
            geschlossen wird, hat derKunde keinen Anspruch darauf, die
            Vertragsinhalte noch einmal schriftlich zu erhalten, es sei denn, es
            wurde anders vereinbart.
          </p>
          <p>
            2.3. Fernmündliche Verträge zwischen Richtungswechsel und dem Kunden
            kommen durch übereinstimmende Willenserklärungen zustande. Der Kunde
            stimmt somit zu, dass Richtungswechsel das Telefonat und/oder den
            Videochat aus Beweis- und Dokumentationszwecken aufzeichnen darf.
          </p>
          <p>
            2.4. Richtungswechsel wird den Zugang zum vertraglichen Inhalt
            unverzüglich per E-Mail bestätigen. Diese E-Mail stellt jedoch noch
            keine verbindliche Annahme dar, es sei denn, die
          </p>
          <p>
            Annahme wird ausdrücklich in derselben E-Mail erklärt. Dies ist
            insbesondere dann der Fall, wenn der Kunde unmittelbar Zugang zum
            vertraglichen Inhalt erhält (z.B. durch Zugang zur
            passwortgeschützten Teilnehmerplattform).
          </p>
          <h3>3. Vertragsgegenstand</h3>
          <p>
            3.1. Unser Angebot beinhaltet die Teilnahme, Erbringung sowie die
            Durchführung von Coachings, Seminaren, Webinaren und
            Beratungsdienstleistungen für unsere Kunden. Dabei bieten wir
            multimedial, videobasiert, telefonisch und auch in persönlicher
            Präsenz unsere Dienstleistungen an. Die detaillierte
            Leistungsbeschreibung ist in unseren Angeboten zu finden.
          </p>
          <p>
            3.2. Es gilt zu beachten, dass Richtungswechsel keine
            Erfolgsgarantie geben kann. Es können lediglich auf Erfahrungswerte
            zurückgegriffen werden um den Erfolg bestimmter Maßnahmen und
            Methoden zu prognostizieren. Ein Anspruch auf das Erreichen eines
            konkreten Erfolgs besteht somit nicht.
          </p>
          <p>
            3.3. Für die Inhalte von Coaching-, Dienstleistungs- und
            Beratungsverträgen behält sich Richtungswechsel ein
            Leistungsbestimmungsrecht nach §315 BGB vor.
          </p>
          <p>
            3.4. Der Kunde ist verpflichtet, im Rahmen des Vertragsverhältnisses
            bei der Erbringung der Dienstleistungen mitzuwirken. Auf das
            Anfordern von Richtungswechsel hin ist der Kunde verpflichtet, die
            erforderlichen Mitwirkungshandlungen unverzüglich zu erbringen.
          </p>
          <p>
            3.5 Die Richtungswechsel-Leistungen stehen ausschließlich den Kunden
            zur Verfügung, um diesen bei der Erreichung der individuellen Zielen
            zu unterstützen. Die Kunden sind dabei nicht dazu bestimmt, weitere
            Berater durch den Inhalt von Richtungswechsel auszubilden. Hierbei
            gilt es zu beachten, dass die Richtungswechsel-Leistungen
            ausschließlich für den persönlichen Gebrauch der Kunden vorgesehen
            ist und nicht für kommerzielle Zwecke genutzt werden darf.
          </p>
          <p style={{ margin: "0" }}>
            3.6. Um die Erbringung der Richtungswechsel-Leistungen
            sicherzustellen, behält sich
          </p>
          <p>
            Richtungswechsel das Recht vor, Subunternehmer entsprechend
            einzusetzen. Diese Subunternehmer sind dazu verpflichtet, angemessen
            auf die Vertraulichkeit der Richtungswechsel Kunden zu achten.
            Sowohl Richtungswechsel als auch die Subunternehmer halten die
            datenschutzrechtlichen Verpflichtungen ein, die für die Erbringung
            der Dienstleistungen notwendig sind.
          </p>
          <h3>4. Preise und Zahlungsbedingungen</h3>
          <p>
            4.1. Alle Preise von Richtungswechsel sind verbindlich und verstehen
            sich netto zuzüglich der gesetzlichen Umsatzsteuer, sofern nichts
            anderes angegeben.
          </p>
          <p>
            4.2. Sofern nicht anders vereinbart, ist die Vergütung durch den
            Kunden sofort und in voller Höhe im Voraus fällig.
          </p>
          <p>
            4.3. Falls der SEPA-Lastschrifteinzug vereinbart wurde, muss der
            Kunde Richtungswechsel nach Vertragsschluss ein schrifliches
            SEPA-Lastschriftmandat erteilen. Auf Anfrage stellt Richtungswechsel
            ein solches Mandat zur Verfügung.
          </p>
          <p>
            4.4. Sollten Lastschriften nicht eingelöst werden können und eine
            Rückbuchung erfolgt, muss der Kunde den geschuldeten Betrag sowie
            die durch die Rückbuchung entstandenen Kosten innerhalb von drei
            Werktagen an Richtungswechsel überweisen.
          </p>
          <p style={{ margin: "0" }}>
            4.5. Sollte der Kunde seine Zahlungen für die Leistungen von
            Richtungswechsel nicht
          </p>
          <p>
            innerhalb von 30 Tagen leisten, ist Richtungswechsel dazu
            berechtigt, die Erbringung der vertraglichen Leistungen ohne
            Vorankündigung auszusetzen, bis der Kunde die ausstehende Vergütung
            zusammen mit den Verzugszinsen und eventuellen Verzugskosten
            vollständig beglichen hat.
          </p>
          <p>
            4.6. Die Nichtinanspruchnahme der Richtungswechsel-Leistungen durch
            den Kunden befreit diesen nicht von seiner Zahlungsverpflichtung
            hinsichtlich laufender Entgelte.
          </p>
          <h3>5. Kündigung, Laufzeit</h3>
          <p>
            5.1. Der Vertrag wird für die im jeweiligen Hauptvertrag vereinbarte
            Laufzeit abgeschlossen.
          </p>
          <p>
            5.2. Der Kunde hat kein vorzeitiges Kündigungsrecht innerhalb der
            Vertragslaufzeit.
          </p>
          <p>
            5.3. Kündigungen bedürfen der zu ihrer Wirksamkeit stets der
            Schriftform.
          </p>
          <p>
            5.4. Ein Recht zur fristlosen Kündigung aus wichtigem Grund bleib
            unberührt.
          </p>
          <h3>6. Verzug / außerordentliche Kündigung</h3>
          <p>
            6.1. Die von Richtungswechsel genannten Fristen für die
            Leistungserbringung beginnen erst nach vollständigem Eingang des
            Rechnungsbetrags und Erhalt aller für die Dienstleistung benötigten
            Daten oder Erbringung durch den Kunden, sofern nichts anderes
            vereinbart.
          </p>
          <p style={{ margin: "0" }}>
            6.2. Sollte der Kunde im Fall einer Ratenzahlung mit einer fälligen
            Zahlung in den Verzug geraten, ist Richtungswechsel berechtigt, den
            Vertrag fristlos zu kündigen und die Leistungen einzustellen. In
            diesem Fall behält sich Richtungswechsel vor, den gesamten
            Vergütungsanspruch geltend zu machen, bis zum nächsten ordentlichen
            Beendigungstermin
          </p>
          <p>
            fällig wird. Etwaige ersparte Aufwendungen werden hiervon abgezogen.
          </p>
          <h3>7. Erfüllung</h3>
          <p>
            7.1. Richtungswechsel verpflichtet sich, die vereinbarten
            Dienstleistungen gemäß des Angebots sorgfältig durchzuführen.
            Richtungswechsel behält sich das Recht vor, zur Erbringung der
            Leistungen Dritte oder Subunternehmer hinzuzuziehen.
          </p>
          <p>
            7.2. Es besteht Einigkeit zwischen den Vertragsparteien, dass
            Richtungswechsel – sofern
            <br />
            nicht ausdrücklich schriftlich anders vereinbart – Dienstleistungen
            und keine Werke erbringt.
          </p>
          <p>
            7.3. Falls Richtungswechsel aufgrund von Gründen, die in der
            Verantwortung des Kunden liegen, daran gehindert ist, die
            vereinbarten Dienstleistungen zu erbringen, Bleibtreu Anspruch auf
            Vergütung unberührt.
          </p>
          <h3>Verhalten und Rücksichtsnahme</h3>
          <p>
            8.1. Der Kunde ist Richtungswechsel gegenüber verpflichtet, die
            Verhaltensweisen eines redlichen Kaufmanns einzuhalten.
            Richtungswechsel behält sich das Recht vor, jegliche rechtswidrigen
            und/oder unsachgemäßen Äußerungen über Richtungswechsel und die
            dazugehörigen Dienstleistungen, einschließlich unwahrer
            Tatsachenbehauptungen und Schmähkritiken, von Kunden, Mitbewerbern
            oder anderen Dritten zivilrechtlich zu verfolgen und gegebenenfalls
            ohne Vorankündigung zur Anzeige zu bringen.
          </p>
          <p>
            8.2. Wenn der Kunde an den Programmen und Dienstleistungen von
            Richtungswechsel teilnimmt, muss der Kunde sicherstellen, dass der
            Fortgang der Dienstleistung reibungslos verläuft und er sich
            kaufmännisch angemessen gegenüber Richtungswechsel und anderen
            Teilnehmern verhält. Sollte der Kunde das Funktionieren unserer
            Dienstleistungen jedoch durch unangemessenes Verhalten
            beeinträchtigen, wird Richtungswechsel den Kunden auffordern, die
            Störungen zu beheben. Im Falle einer Wiederholung ist
            Richtungswechsel berechtigt, den Kunden vorübergehend oder dauerhaft
            von dem Coaching und Dienstleistungen auszuschließen. Der Anspruch
            von Richtungswechsel auf Vergütung bleibt in diesen Fällen
            unberührt.
          </p>
          <h3>Nutzungsrechte</h3>
          <p>
            9.1. Alle von Richtungswechsel veröffentlichten Bilder, Videos,
            Texte, Webinare usw. (z.B. auf Facebook oder passwortgeschützten
            Plattformen) unterliegen dem ausschließlichen Urheberrechten von
            Richtungswechsel. Jegliche Nutzung dieser Inhalte ohne die
            Zustimmung von Richtungswechsel ist untersagt.
          </p>
          <p>
            9.2. Im Rahmen des mit dem Kunden geschlossenen Vertrags gewährt
            Richtungswechsel dem Kunden ein einfaches Nutzungsrecht für die im
            passwortgeschützten Mitgliederbereich hinterlegten Inhalte. Dieses
            Nutzungsrecht gilt ausschließlich für die Vertragsdauer.
          </p>
          <p>
            9.3. Der Kunde erhält Zugang und Login zu dem Coaching, Inhalten und
            Plattformen höchstpersönlich und nur für die gebuchte
            Vertragslaufzeit. Eine Weitergabe an nicht autorisierte Dritte ist
            strengstens untersagt und kann zu einer Vertragsstrafe führen. Der
            Zugriff durch Betriebsangehörig/Mitarbeiterdes Kunden ist
            genehmigungsfähig, bedarf jedoch der ausdrücklichen Genehmigung und
            Bestätigung durch Richtungswechsel.
          </p>
          <p>
            9.4. Durch die Nutzung der Mitgliederplattformen stimmt der Kunde
            der Auswertung des individuellen Nutzungsverhaltens und der Erhebung
            der damit verbundenen personenbezogenen Daten zu, die während der
            Vertragslaufzeit auf der Plattform erhoben werden.
          </p>
          <p>
            9.5. die Verletzung der Geschäfts- und Betriebsgeheimnisse sowie der
            Urheberrechte von Richtungswechsel wird zivil- und strafrechtlich
            verfolgt.
          </p>
          <p>
            9.6. der Kunde hat kein Nutzungsrecht an Werbetexten oder Anzeigen,
            die von <br />
            Richtungswechsel veröffentlicht wird.
          </p>
          <h3> 10. Haftung</h3>
          <p>
            10.1. Richtungswechsel übernimmt nur bei Vorsatz und grober
            Fahrlässigkeit eine Haftung auf Schadensersatz – unabhängig vom
            Rechtsgrund. Haftung für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit bleibt von den vorstehenden
            Haftungsbeschränkungen und- Ausschlüssen unberührt.
          </p>
          <p>
            10.2. Richtungswechsel haftet nicht für die Daten- und
            Programmverluste, es sei denn, diese resultieren aus Vorsatz oder
            grober Fahrlässigkeit. Im Falle von Datenverlust wird die Haftung
            auf den typischen Wiederherstellungsaufwand begrenzt, der bei
            regelmäßiger und angemessener Anfertigung von Sicherungskopien
            entstanden wäre. Die Haftung nach dem Produkthaftungsgesetz bleibt
            hiervon unberührt, ebenso wie die Übernahme von Garantien.
          </p>
          <p>
            10.3. Der Kunde hat die Verpflichtung, im Rahmen seiner
            Mitwirkungspflichten nur Bild-, Video- oder Tonmaterial zur
            Verfügung zu stellen, bei dem keine Rechte Dritter verletzt werden.
            Sollten dennoch Ansprüche Dritter wegen der Verletzung geistigen
            Eigentums entstehen, stellt der Kunde Richtungswechsel von diesem
            Ansprüchen vollständig frei.
          </p>
          <h3>11. Widerrufsrecht</h3>
          <p>
            Für Unternehmer gemäß §14 BGB sowie Kaufleute laut Handelsgesetzbuch
            (HGB) gibt es kein gesetzliches Widerrufsrecht und Richtungswechsel
            gewährt ein solches auch nicht auf einem anderen Wege.
          </p>
          <h3>12. Datenschutz und Einwilligung in Datenverarbeitung</h3>
          <p>
            2.1. Der Schutz von personenbezogenen Daten hat für Richtungswechsel
            höchste Priorität und Richtungswechsel informiert den Kunden
            gesondert in einer Datenschutzerklärung über die Erhebung,
            Speicherung und Verarbeitung der Daten sowie die Rechte des Kunden
            als betroffene Person. Der Kunde bestätigt hiermit, dass der Kunde
            die Datenschutzerklärung von Richtungswechsel vor Inanspruchnahme
            der Dienste von Richtungswechsel, gelesen und akzeptiert hat.
          </p>
          <p>
            12.2. Durch die Nutzung der Dienste von Richtungswechsel willigt der
            Kunde widerruflich die Kontaktaufnahme durch Richtungswechsel
            mittels Fernkommunikationsmitteln (z.B. E-Mail, Telefon, SMS usw.)
            ein. Unvollständige Angaben werden nicht berücksichtigt.
          </p>
          <p>
            12.3. Des Weiteren willigt der Kunde widerruflich die Speicherung
            und Verarbeitung sämtlicher von dem Kunden hinterlassenen
            personenbezogenen Daten ein, wie z.B. im Bewerbungsformular
            angegebenen Daten wie Name, Anschrift, Telefonnummer, E-Mail-
            Adresse, persönliche Interessen, finanzielle Verhältnisse, Hobbies
            und Charakterfragen. Außerdem willigt der Kunde den Einsatz von
            Cookies innerhalb der Richtungswechsel- Dienste sowie die
            Auswertung, Speicherung und Zusammenführung des Nutzverhaltens und
            der Verarbeitung und Übermittlung der vom Kunden personenbezogenen
            Daten und Nutzerprofile zu Marketing- und Werbezwecken an Dritte in
            Nicht-EU-/EWR-Ländern ein.
          </p>
          <h2>
            II. Besondere Regelungen für die Teilnahme an unserem Coaching und
            Mitgliederplattformen
          </h2>
          <h3>Unzulässiges Account-Sharing</h3>
          <ol>
            <li>
              Der Kunde darf die Logindaten, welche er von Richtungswechsel
              erhält, nicht an Dritte weitergeben, es sein denn,
              Richtungswechsel hat ausdrücklich zugestimmt (z.B. für
              festangestellte Mitarbeiter des Kunden). Dabei muss der Kunde
              stets die Plattformen sowie Coachingsinhalte respektvoll nutzen.
            </li>
            <li>
              1.2 Richtungswechsel behält sich das Recht vor, den Zugang zu den
              IT-Systemen durch IP-Abgleich dauerhaft zu überwachen. Es ist
              untersagt, Technologien zu nutzen, die die IP-Adresse des Nutzers
              beim Zugriff auf die Systeme und Inhalte von Richtungswechsel
              verschleiern, verfälschen oder anonymisieren (z.B. Tor-Browser).
            </li>
          </ol>
          <span>
            1.3Wenn der Kunde gegen die Verpflichtungen aus Absatz 1 und 2
            verstößt, ist Richtungswechsel berechtigt, den Zugang zu den
            Systemen sowie den Inhalten nach angemessenem Ermessen dauerhaft
            oder vorübergehend zu sperren, ohne dass die vertraglichen
            Verpflichtungen gegenüber Richtungswechsel beeinträchtigt wird.
          </span>
          <span>
            1.4 Unerlaubtes Account-Sharing wird als Straftat betrachtet und
            Richtungswechsel wird rechtliche Schritte gegen den Kunden
            einleiten.
          </span>
          <h3>Akquise anderer Coaching-Teilnehmer</h3>
          <ol>
            <li>
              2.1. Der Kunde darf im Rahmen des Coachings andere Teilnehmer für
              eigene Aufträge akquirieren. Eine systematische Kundenakquise ist
              jedoch nicht gestattet. Der Kunde hat sicherzustellen, dass er
              andere Coaching Teilnehmer nicht belästigt.
            </li>
            <li>
              2.2. Falls der Kunde schuldhaft gegen die Verpflichtungen aus
              Absatz 1 verstößt, ist Richtungswechsel nach einmaliger Verwarnung
              berechtigt, den Zugang des Kunden zu den eigenen
              Social-Media-Gruppen nach billigem Ermessen vorübergehend oder
              dauerhaft zu sperren beziehungsweise den Kunden von der Teilnahme
              an den Richtungswechsel Coaching-Programmen auszuschließenden. Die
              vertraglichen Verpflichtungen des Kunden gegenüber
              Richtungswechsel bleiben in diesem Fall unberührt.
            </li>
          </ol>
        </div>
      </div>
      <div className="top-kontact-alignment">
      <Kontact/>
      </div>
    </div>
  );
}
