import React from "react";
import "./kontact.scss";
export default function Kontact() {
  return (
    <div>
      <div className="container8" id="kontact">
        <div className="kontact-section-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <div className="text-new">

              </div>
            </div>
            <div className="grid-items">
              <div className="form">
                <label>EMRI</label>
                <input type="text" placeholder="Shkruani emrin tuaj" />
              </div>
              <div className="form">
                <label>E-MAIL*</label>
                <input type="text" placeholder="Shkruani adresën tuaj të email-it" />
              </div>
              <div className="form">
                <label>NUMRI I TELEFONIT</label>
                <input type="text" placeholder="Shkruani numrin tuaj të telefonit" />
              </div>
              <div className="form">
                <label>MESAZHI JUAJ</label>
                <textarea placeholder="Shkruani sugjerimin tuaj këtu"></textarea>
              </div>

              <div className="btn">
                <button>DERGO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
