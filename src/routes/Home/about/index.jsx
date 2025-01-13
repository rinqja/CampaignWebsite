import React from 'react';
import PropTypes from 'prop-types';
import "./about.scss";

import ArrowIcon from '../../../assets/icons/arrow.svg';

export default function AboutSection({ data }) {
  return (
    <div className="richtungswechsel-sapcer">
      <div className="container">
        <div className="richtungswechsel-all-contnet-alignment">
          <div className="grid">
            <div className="grid-items">
              <p>{data.mainMessage}</p>
            </div>
            <div className="grid-items">
              <h1>{data.heading}</h1>
              {data.description.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
              <div className="btn-alignment">
                <a href="#kontact">
                  <button>Bashkohu me kampanjenë tonë</button>
                </a>
                <a href="#uberuns">Rreth meje</a>
              </div>
            </div>
          </div>
          <a href="#Leistungen">
            <div className="arrow-text">
              <span>{data.scrollText}</span>
              <img src={ArrowIcon} alt="ArrowIcon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

AboutSection.propTypes = {
  data: PropTypes.shape({
    mainMessage: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    scrollText: PropTypes.string.isRequired,
  }).isRequired,
};
