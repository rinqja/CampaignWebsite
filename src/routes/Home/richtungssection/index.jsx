import React from "react";
import "./richtungssection.scss";
import ManImage from "../../../assets/imges/man.png";
import MobileManImage from "../../../assets/imges/mobile-men.png";
import BoxImage from "../../../assets/imges/box.svg";
export default function Richtungssection() {
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
                  Unë besoj fort se Kosova meriton një të ardhme më të ndritshme, ku qytetarët tanë të kenë mundësi të barabarta për zhvillim dhe mirëqenie.
                </h6>
              </div>
              <div className="left-content-alignment">
                <div className="line"></div>
                <span>Emri i kandidatit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="box">
            <div className="box-image">
              <img src={BoxImage} alt="BoxImage" />
            </div>
            <h2>VIZIONI IM PËR KOSOVËN</h2>
            <p>
              Të dashur qytetarë, Kosova ka nevojë për një drejtim të ri që
              reflekton shpresat dhe ëndrrat e të gjithëve. Si kandidat për
              deputet, vizioni im është i thjeshtë, por i fuqishëm: zhvillimi i
              qëndrueshëm ekonomik, arsim cilësor dhe shëndetësi për të gjithë,
              krijimi i vendeve të reja të punës dhe mbështetje për të rinjtë
              tanë. Ne duhet të luftojmë korrupsionin, të modernizojmë
              infrastrukturën dhe të krijojmë politika që i japin prioritet
              qytetarit.
            </p>
            <p>
              Me përkushtim dhe punë të palodhshme, unë jam i vendosur të
              ndërtoj një Kosovë ku çdo zë dëgjohet dhe çdo qytetar ka një
              mundësi për të arritur potencialin e tij. Besoj në një Kosovë ku
              transparenca dhe drejtësia janë themeli i institucioneve tona.
            </p>
            <p>
              Le të bashkohemi për ta bërë këtë vizion realitet. Tani është
              koha për ndryshim, dhe unë jam gati të punoj për ju dhe për të
              ardhmen e fëmijëve tanë.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
