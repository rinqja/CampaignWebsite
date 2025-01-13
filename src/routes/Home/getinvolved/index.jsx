import React from "react";
import "./getinvolved.scss";
import ManImage from "../../../assets/imges/ibrahim.jpg";
import MobileManImage from "../../../assets/imges/mobile-men.png";
import BoxImage from "../../../assets/logo/logo.png";
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
                <h5></h5>
                <h6>
                  PËR <br />
                  NJË TË ARDHME
                  <br /> MË TË MIRË
                </h6>
              </div>
              <div className="left-content-alignment">
                <div className="line"></div>
                <span>Arben Gashi, Kandidat</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-items">
          <div className="box">
            <div className="box-image">
              <img src={BoxImage} alt="BoxImage" />
            </div>
            <h2>BËHU NDRYSHIMI</h2>
            <span>
              A keni menduar ndonjëherë se si mund të bëni një ndryshim të vërtetë në komunitetin tuaj? Tani është koha për të vepruar.
            </span>
            <span>
              Bashkohuni me ne për të ndërtuar një të ardhme më të mirë për të gjithë. Lëvizja jonë është e krijuar për qytetarë të angazhuar dhe të përkushtuar si ju.
            </span>
            <p>
              Sa herë keni dëshiruar të shihni ndryshime reale, por keni ndjerë se zëri juaj nuk është dëgjuar? Ne besojmë se çdo zë ka rëndësi.
            </p>
            <p>
              Ne jemi qytetarë si ju, të përkushtuar për të sjellë ndryshime pozitive. Së bashku, mund të krijojmë politika që reflektojnë nevojat dhe aspiratat e komunitetit tonë.
            </p>
            <p>
              Dëshironi të bëheni pjesë e ndryshimit? Mos hezitoni. Bashkohuni me ne dhe kontribuoni në ndërtimin e një të ardhmeje më të mirë për vendin tonë.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
