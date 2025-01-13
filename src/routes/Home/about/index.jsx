import React from "react";
import "./about.scss";
import ArrowIcon from "../../../assets/icons/arrow.svg";
export default function AboutSection() {
  return (
    <div className="richtungswechsel-sapcer">
      <div className="container">
        <div className="richtungswechsel-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <p>BËHU NDRYSHIMI</p>
            </div>
            <div className="grid-items">
              <h1>NDËRTOJMË SË BASHKU NJË TË ARDHMJE MË TË MIRË</h1>
              <span>
                Si kandidati juaj për deputet, jam i përkushtuar
                të sjell ndryshime domethënëse nëpërmjet politikave inovative
                dhe shërbimit publik të dedikuar. Me 15 vjet përvojë në zhvillimin e
                komunitetit dhe hartimin e politikave, rezultatet e mia tregojnë përkushtim
                të vazhdueshëm në përmirësimin e arsimit, aksesit në kujdesin shëndetësor
                dhe mundësive ekonomike për të gjithë qytetarët.
              </span>
              <span>
                Së bashku, mund të ndërtojmë një komunitet më të fortë dhe më të begatë që punon për secilin prej nesh.
              </span>
              <div className="btn-alignment">
                <a href="#kontakt">
                  <button>Bashkohu me kampanjenë tonë</button>
                </a>
                <a href="#uberuns">Rreth meje</a>
              </div>
            </div>
          </div>
          <a href="#Leistungen">
            <div className="arrow-text">
              <span>Klikoni për të parë më shumë</span>
              <img src={ArrowIcon} alt="ArrowIcon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
