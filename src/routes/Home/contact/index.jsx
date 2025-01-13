import React from "react";
import "./kontact.scss";
export default function ContactSection() {
  return (
    <div>
      <div className="container8" id="kontakt">
        <div className="kontact-section-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <div className="text-new">
                <h5>KONTAKT</h5>
                <a href="mailto: info@fushata-jone.com">info@fushata-jone.com</a>
                <p>Rruga e Dëshmorëve 123</p>
                <p>10000 Prishtinë</p>
              </div>
            </div>
            <div className="grid-items">
              <div className="form">
                <label>EMRI</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>E-MAIL*</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>NUMRI I TELEFONIT</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>MESAZHI JUAJ</label>
                <textarea></textarea>
              </div>

              <div className="btn">
                <button>DËRGO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
