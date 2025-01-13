import React, { useState } from "react";
import "./processsection.scss";
import DownIcon from '../../../assets/icons/new-down.svg';
import AnimatedSection from "../../../components/Animation";

export default function Processsection({ data }) {
  const [toggle, setToggle] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Angazhimi Fillestar",
      description: "Fushata jonë fillon me angazhimin e drejtpërdrejtë me komunitetin. Ne besojmë në kuptimin e nevojave të çdo lagjeje dhe qytetari. Përmes takimeve publike, forumeve komunitare dhe kontakteve të drejtpërdrejta, mbledhim njohuri të vlefshme për të formësuar politikat dhe iniciativat tona."
    },
    {
      number: "02",
      title: "Zhvillimi i Politikave",
      description: "Bazuar në kontributin e komunitetit, ne zhvillojmë politika gjithëpërfshirëse që adresojnë nevojat reale. Sesionet tona 30-minutëshe me komunitetin u lejojnë qytetarëve të ofrojnë reagime të drejtpërdrejta mbi iniciativat e propozuara, duke siguruar që qasja jonë përfaqëson vërtet aspiratat e komunitetit tonë."
    },
    {
      number: "03",
      title: "Zbatimi",
      description: "Veprat flasin më shumë se fjalët. Pasi politikat përsosen përmes reagimeve të komunitetit, ne lëvizim shpejt drejt zbatimit. Ekipi ynë siguron ekzekutim transparent duke ruajtur komunikim të rregullt me zgjedhësit për progresin dhe ndikimin."
    }
  ];

  return (
    <div className="process-section-all-contnet-alignment">
      <div className="container5">
        <div className="grid">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              animationType="fade-up" 
              duration={1000} 
              delay={400 + (index * 200)}
            >
              <div className="grid-items spacer-left">
                <h6>{step.number}</h6>
                <p>{step.title}</p>
                <span>{step.description}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="container6" id="faq">
        <div className="sub-heading">
          <h5>PYETJET MË TË SHPESHTA</h5>
        </div>
        <div className="main-grid main-grid-mobile-hide">
          <div className="main-grid-items">
            {data.faq.slice(0, 4).map((item, index) => (
              <div key={index} className={`flip-card ${index === 0 ? 'one' : index === 1 ? 'two' : index === 2 ? 'three' : 'new2'}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p>{item.question}</p>
                  </div>
                  <div className="flip-card-back">
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="main-grid-items">
            {data.faq.slice(4, 8).map((item, index) => (
              <div key={index} className={`flip-card ${index === 0 ? 'new1' : index === 1 ? 'four' : index === 2 ? 'five' : 'six'}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p>{item.question}</p>
                  </div>
                  <div className="flip-card-back">
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="main-grid-items">
            {data.faq.slice(8, 12).map((item, index) => (
              <div key={index} className={`flip-card ${index === 0 ? 'six' : index === 1 ? 'two' : index === 2 ? 'new1' : 'four'}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p>{item.question}</p>
                  </div>
                  <div className="flip-card-back">
                    <span>{item.answer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-m">
          <div className="new-contnet-alignment-design-style" onClick={() => setToggle(!toggle)}>
            <a>{toggle ? 'Trego Më Pak' : 'Trego Më Shumë'}</a>
            <img className={toggle ? "animation-time rotate" : "animation-time"} src={DownIcon} alt="DownIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
