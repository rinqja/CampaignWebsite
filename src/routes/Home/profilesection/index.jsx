import React from "react";
import "./profilesection.scss";
import Image01 from "../../../assets/imges/01.png";
import Image02 from "../../../assets/imges/02.png";
import Image03 from "../../../assets/imges/03.png";
import AnimatedSection from "../../../components/Animation";

const profileImages = [Image01, Image02, Image03];

export default function Profilesection({ data }) {
  if (!data || !data.profiles) {
    console.error('Invalid or missing data prop');
    return null;
  }

  return (
    <div className="profile-section-all-contnet-alignment">
      <div className="container7">
        <div className="grid">
          {data.profiles.map((profile, index) => (
            <div className="grid-items" key={index}>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={200}
              >
                <div className="img">
                  <img src={profileImages[index]} alt={`Image${index + 1}`} />
                </div>
              </AnimatedSection>
              <AnimatedSection
                animationType="fade-up"
                duration={1000}
                delay={400}
              >
                <div className="text">
                  <h4>{profile.name}</h4>
                  <h5>{profile.title}</h5>
                  <h6>{profile.description}</h6>
                  <div className="left-right">
                    {profile.content.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
