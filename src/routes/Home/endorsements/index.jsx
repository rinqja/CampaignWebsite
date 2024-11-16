import React from "react";
import "./endorsements.scss";
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
                <h5>MBËSHTETJE NGA BASHKËQYTETARËT</h5>
                <p>
                  Ne jemi të nderuar të ndajmë disa nga mesazhet e mbështetjes që kemi marrë nga qytetarët dhe
                  liderët komunitarë që besojnë në vizionin tonë për një të ardhme më të mirë. Zërat e tyre
                  pasqyrojnë shpresat dhe aspiratat e një komuniteti të bashkuar për ndryshim pozitiv.
                </p>
              </div>
            </div>
            <div className="grid-items">
              <div className="two-col-grid">
                <div className="two-col-grid-items">
                  <div className="box">
                    <div className="text-child">
                      <p>
                        "Si mësuese në këtë komunitet për mbi 20 vjet, kam parë sfidat me të cilat përballen
                        studentët tanë. Besoj se me vizionin dhe përkushtimin e tij, ky kandidat do të sjellë
                        ndryshimet e nevojshme në sistemin arsimor. Jam e entuziazmuar për të ardhmen që ai
                        premton."
                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage} alt="ProfileImage" />
                      </div>
                      <div>
                        <p>Arta K.</p>
                        <span>Prishtinë</span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="text-child">
                      <p>
                        "Si pronar biznesi lokal, kam vlerësuar gjithmonë mbështetjen e tij për sipërmarrësit.
                        Iniciativat e tij për të reduktuar burokracinë dhe për të inkurajuar zhvillimin ekonomik
                        janë pikërisht ajo që na duhet për të çuar përpara ekonominë tonë lokale."
                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage2} alt="ProfileImage2" />
                      </div>
                      <div>
                        <p>Besnik R.</p>
                        <span>Gjakovë</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="two-col-grid-items">
                  <div className="box">
                    <div className="text-child">
                      <p>
                        "Përkushtimi i tij ndaj mbrojtjes së mjedisit është frymëzues. Si aktivist mjedisor,
                        jam i lumtur të shoh një kandidat që merr seriozisht çështjet e qëndrueshmërisë dhe
                        mbrojtjes së natyrës sonë të bukur."
                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage3} alt="ProfileImage3" />
                      </div>
                      <div>
                        <p>Leon D.</p>
                        <span>Pejë</span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="text-child">
                      <p>
                        "Si mjeke familjare, e di sa e rëndësishme është qasja në kujdes shëndetësor cilësor.
                        Programet e tij për përmirësimin e infrastrukturës shëndetësore do të kenë një ndikim
                        pozitiv në jetën e shumë njerëzve në komunitetin tonë."
                      </p>
                    </div>
                    <div className="profile-grid">
                      <div>
                        <img src={ProfileImage} alt="ProfileImage" />
                      </div>
                      <div>
                        <p>Elira M.</p>
                        <span>Prizren</span>
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
