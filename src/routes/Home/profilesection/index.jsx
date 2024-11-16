import React from "react";
import "./profilesection.scss";
import Image01 from "../../../assets/imges/01.png";
import Image02 from "../../../assets/imges/02.png";
import Image03 from "../../../assets/imges/03.png";
import AnimatedSection from "../../../components/Animation";
export default function Profilesection() {
  return (
    <div className="profile-section-all-contnet-alignment">
      <div className="container7">
        <div className="grid">
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image01} alt="Image01" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>ARBEN GASHI</h4>
                <h5>Kandidat për Deputet</h5>
                <h6>
                  Me përvojë të gjerë në shërbimin publik dhe politikë
                </h6>
                <div className="left-right">
                  <p>Njihuni me Arben Gashin: </p>
                  <p>
                    Arben Gashi është një lider i përkushtuar me mbi 20 vjet përvojë në shërbimin publik.
                    Ai ka punuar pa u lodhur për të përmirësuar jetën e qytetarëve, duke u fokusuar në
                    edukim, shëndetësi dhe zhvillim ekonomik.
                  </p>
                  <p>
                    "Besoj se së bashku mund të ndërtojmë një të ardhme më të mirë për të gjithë."
                  </p>
                  <p>
                    Arbeni është i njohur për aftësinë e tij për të bashkuar njerëzit dhe për të gjetur
                    zgjidhje praktike për sfidat me të cilat përballet komuniteti ynë. Ai sjell një
                    qasje inovative dhe energji të re në politikën tonë.
                  </p>
                  <p>
                    Me përkushtimin e tij ndaj transparencës dhe llogaridhënies, Arbeni synon të
                    përmirësojë qeverisjen dhe të sigurojë që zëri i çdo qytetari të dëgjohet.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image02} alt="Image02" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>LEON DERVISHI</h4>
                <h5>Menaxher Fushate</h5>
                <h6>Ekspert në strategji politike dhe organizim</h6>
                <div className="left-right">
                  <p>Njihuni me Leon Dervishin: </p>
                  <p>
                    Leon Dervishi sjell një përvojë të pasur në menaxhimin e fushatave dhe strategjive politike.
                    Me një qasje kreative dhe të fokusuar, ai ka ndihmuar në formësimin e politikave që
                    reflektojnë nevojat e qytetarëve.
                  </p>
                  <p>
                    "Çdo sfidë është një mundësi për të bërë ndryshimin."
                  </p>
                  <p>
                    Leon është i përkushtuar për të angazhuar komunitetin dhe për të siguruar që fushata
                    jonë të jetë gjithëpërfshirëse dhe efektive. Ai punon ngushtë me ekipin për të
                    implementuar strategji që sjellin rezultate konkrete.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid-items">
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={200}
            >
              <div className="img">
                <img src={Image03} alt="Image03" />
              </div>
            </AnimatedSection>
            <AnimatedSection
              animationType="fade-up"
              duration={1000}
              delay={400}
            >
              <div className="text">
                <h4>ELIRA MUSTAFA</h4>
                <h5>Këshilltare Politike</h5>
                <h6>Specialiste në politika publike dhe zhvillim komunitar</h6>
                <div className="left-right">
                  <p>Njihuni me Elira Mustafën: </p>
                  <p>
                    Elira Mustafa është një këshilltare politike me një fokus të veçantë në politikat
                    publike që përmirësojnë jetën e qytetarëve. Me përvojë në sektorin publik dhe atë
                    jofitimprurës, ajo sjell një perspektivë unike në ekipin tonë.
                  </p>
                  <p>
                    "Besoj në fuqinë e politikave të mira për të ndryshuar jetët."
                  </p>
                  <p>
                    Elira punon për të zhvilluar dhe promovuar politika që janë të bazuara në kërkime
                    dhe të orientuara drejt rezultateve. Ajo është e përkushtuar për të siguruar që
                    politikat tona të jenë efektive dhe të përgjegjshme ndaj nevojave të komunitetit.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
