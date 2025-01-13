import React, { useEffect } from "react";
import "./footer.scss";
import Icon01 from "../../assets/icons/i1.svg";
import Icon02 from "../../assets/icons/i2.svg";
import Icon03 from "../../assets/icons/i3.svg";
import { NavLink } from "react-router-dom";
export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s.provenexpert.net/seals/proseal-v2.js";
    script.onload = function () {
      window.provenExpert.proSeal({
        widgetId: "55a82de9-a98a-4430-be4f-dcf7ed616dc9",
        language: "de-DE",
        bannerColor: "#0DB1CD",
        textColor: "#FFFFFF",
        showReviews: true,
        hideDate: false,
        hideName: false,
        googleStars: true,
        displayReviewer: true,
        displayReviewerLastName: false,
        embeddedSelector: "#proSealWidget"
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div>
      <footer>
        <div className="container8">
          <div></div>
          <div className="footer-content-alignment">
            <div className="left-contnet">
              <p>SOCIAL LINKS</p>
              <div className="social-icon-alignment">
                <a
                  href="https://www.instagram.com/richtungswechsel_consulting/?igshid=NzZlODBkYWE4Ng%3D%3D"
                  target="_blank"
                >
                  <img src={Icon01} alt="Icon01" />
                </a>
                <img src={Icon02} alt="Icon02" />
              </div>
            </div>
            <div className="right-contnet">
              <p>RECHTLICHES</p>
              <NavLink to="/agb">AGB</NavLink>
              <NavLink to="/impressum">IMPRESSUM</NavLink>
              <NavLink to="/datenschutz">DATENSCHUTZ</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
