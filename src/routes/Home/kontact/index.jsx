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
                    <h5>KONTAKT</h5>
                    <a href = "mailto: kontakt@richtungswechsel-consulting.de">kontakt@richtungswechsel-consulting.de</a>
                    <p>Birkenwaldstraße 29</p>
                    <p>70191 Stuttgart</p>
                </div>
            </div>
            <div className="grid-items">
              <div className="form">
                <label>NAME</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>E-MAIL*</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>TELEFONNUMMER</label>
                <input type="text" />
              </div>
              <div className="form">
                <label>IHRE NACHRICHT</label>
                <textarea></textarea>
              </div>
              <div className="checkbox-text">
                <input type="checkbox" id="Donuts" />
                <label htmlFor="Donuts">
                  {" "}
                  <span>
                  HIERMIT STIMME ICH DEN DATENSCHUTZBESTIMMUNGEN UND DEN AGB ZU.


                  </span>
                </label>
              </div>
              <div className="btn">
                <button>ABSENDEN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
