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
              <p>Emri Deputetit</p>
            </div>
            <div className="grid-items">
              <h1>Sllogani i Partise</h1>
              <span>
                Partia e re e cila do të sjellë ndryshime të mëdha në vendin tonë. Tekst per partine.

              </span>
              <span>
                Ma shume tekst per partine. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore necessitatibus, aperiam
                tempore eaque eum excepturi ex dicta, iste fugiat iusto accusantium doloribus repudiandae fuga maxime! Voluptate iusto necessitatibus dicta.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur, obcaecati sit cum natus reprehenderit quas rerum praesentium
                optio distinctio ea  sunt itaque nostrum vel, consequuntur officia. Laudantium!
              </span>
              <div className="btn-alignment">


              </div>
            </div>
          </div>
          <a href="#Leistungen">
            <div className="arrow-text">
              <span>Ma shume </span>
              <img src={ArrowIcon} alt="ArrowIcon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
