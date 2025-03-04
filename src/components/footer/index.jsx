import React, { useEffect } from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
        language: "sq-AL",
        bannerColor: "#0DB1CD",
        textColor: "#FFFFFF",
        display: none,
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
          <div id="proSealWidget"></div>
          <div className="footer-content-alignment">
            <div className="left-contnet">
              <p>RRJETET SOCIALE</p>
              <div className="social-icon-alignment">
                <a
                  href="https://www.facebook.com/fushata-jone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} color="#fff" />
                </a>
                <a
                  href="https://www.facebook.com/fushata-jone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} color="#fff" />
                </a>
              </div>
            </div>
            <div className="right-contnet">
              <p>INFORMACIONE LIGJORE</p>
              <NavLink to="/kushtet">KUSHTET E PËRDORIMIT</NavLink>
              <NavLink to="/impressum">IMPRESSUM</NavLink>
              <NavLink to="/privatesia">POLITIKA E PRIVATËSISË</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
