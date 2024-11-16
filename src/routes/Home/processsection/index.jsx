import React, { useState } from "react";
import "./processsection.scss";
import DownIcon from '../../../assets/icons/new-down.svg';
import AnimatedSection from "../../../components/Animation";

export default function Processsection() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="process-section-all-contnet-alignment">
      <div className="container5">
        <div className="grid">
          <AnimatedSection animationType="fade-up" duration={1000} delay={400}>
            <div className="grid-items spacer-left">
              <h6>01</h6>
              <p>Angazhimi Fillestar</p>
              <span>
                Fushata jonë fillon me angazhimin e drejtpërdrejtë me komunitetin. Ne besojmë në
                kuptimin e nevojave të çdo lagjeje dhe qytetari. Përmes
                takimeve publike, forumeve komunitare dhe kontakteve të drejtpërdrejta, mbledhim
                njohuri të vlefshme për të formësuar politikat dhe iniciativat tona.
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" duration={1000} delay={600}>
            <div className="grid-items">
              <h6>02</h6>
              <p>Zhvillimi i Politikave</p>
              <span>
                Bazuar në kontributin e komunitetit, ne zhvillojmë politika gjithëpërfshirëse që
                adresojnë nevojat reale. Sesionet tona 30-minutëshe me komunitetin u lejojnë qytetarëve
                të ofrojnë reagime të drejtpërdrejta mbi iniciativat e propozuara, duke siguruar që
                qasja jonë përfaqëson vërtet aspiratat e komunitetit tonë.
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" duration={1000} delay={800}>
            <div className="grid-items">
              <h6>03</h6>
              <p>Zbatimi</p>
              <span>
                Veprat flasin më shumë se fjalët. Pasi politikat përsosen përmes
                reagimeve të komunitetit, ne lëvizim shpejt drejt zbatimit. Ekipi ynë siguron
                ekzekutim transparent duke ruajtur komunikim të rregullt me
                zgjedhësit për progresin dhe ndikimin.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="container6" id="faq">
        <div className="sub-heading">
          <h5>PYETJET MË TË SHPESHTA</h5>
        </div>
        <div className="main-grid main-grid-mobile-hide">
          <div className="main-grid-items">
            <div className="flip-card one">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Cilat janë<br/>prioritetet tuaja<br/>kryesore për<br/>komunitetin tonë?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Prioritetet tona fokusohen në zhvillimin ekonomik, reformën në arsim,
                    aksesin në kujdesin shëndetësor dhe mbrojtjen e mjedisit. Ne jemi të përkushtuar
                    për të krijuar rritje të qëndrueshme duke siguruar që asnjë anëtar i komunitetit
                    të mos mbetet pas.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card two">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Si planifikoni të<br/>angazhoheni me<br/>zgjedhësit?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Ne mbajmë një politikë dyer të hapura me takime të rregullta publike, forume
                    digjitale dhe mbledhje komunitare. Ekipi ynë është gjithmonë i disponueshëm
                    për të dëgjuar shqetësimet dhe idetë tuaja për përmirësimin e komunitetit tonë.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card three">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Çfarë përvoje<br/>sillni në këtë<br/>pozicion?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Me 15 vjet përvojë në shërbimin publik, duke përfshirë role në
                    këshillin e qytetit dhe zhvillimin e komunitetit, sjell njohuri praktike
                    dhe aftësi të provuara udhëheqëse për të adresuar sfidat e komunitetit tonë.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Si do të siguroni<br/>transparencë në<br/>qeverisje?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Ne jemi të përkushtuar ndaj transparencës së plotë përmes raporteve të rregullta publike,
                    takimeve të hapura për buxhetin dhe platformave digjitale të aksesueshme ku qytetarët
                    mund të ndjekin progresin e të gjitha iniciativave.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-grid-items">
            <div className="flip-card new1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Çfarë e veçon<br/>qasjen tuaj nga<br/>qeverisja<br/>tradicionale?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Qasja jonë kombinon teknologjinë moderne me vlerat tradicionale të komunitetit.
                    Ne përdorim mjete digjitale për angazhim më të mirë duke ruajtur
                    lidhjet personale përmes pranisë së rregullt në komunitet.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card four">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Cili është plani juaj<br/>për rritje<br/>ekonomike?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Plani ynë ekonomik fokusohet në mbështetjen e bizneseve lokale, tërheqjen
                    e investimeve të reja dhe krijimin e mundësive të punësimit përmes
                    reduktimit të burokracisë dhe programeve të zhvillimit të synuara.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card five">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Si do të adresoni<br/>çështjet<br/>mjedisore?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Strategjia jonë mjedisore përfshin iniciativa për energji të gjelbër,
                    praktika të zhvillimit të qëndrueshëm dhe programe konservimi të bazuara
                    në komunitet për të siguruar një të ardhme më të pastër dhe më të shëndetshme.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card six">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Cilat janë planet<br/>tuaja për reformën<br/>në arsim?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Ne jemi të përkushtuar për modernizimin e sistemit tonë arsimor përmes
                    rritjes së financimit, integrimit të teknologjisë dhe zgjerimit të
                    programeve pas shkollës për të siguruar që çdo student të ketë akses
                    në arsim cilësor.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-grid-items">
            <div className="flip-card new3">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Si do të përmirësoni<br/>sigurinë publike?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Plani ynë gjithëpërfshirës për sigurinë publike përfshin policimin komunitar,
                    përmirësimin e kohës së reagimit emergjent dhe programe vëzhgimi në lagje.
                    Ne do të punojmë ngushtë me forcat e rendit për të siguruar komunitete të sigurta.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Çfarë për shërbimet<br/>për të moshuarit?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Ne po zgjerojmë shërbimet për të moshuarit me transport të përmirësuar,
                    akses në kujdesin shëndetësor dhe programe komunitare. Qëllimi ynë është të sigurojmë
                    që të moshuarit tanë të mund të jetojnë në mënyrë të pavarur me dinjitet dhe mbështetje.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new5">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Si do të mbështesni<br/>bizneset lokale?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Programi ynë i mbështetjes së biznesit përfshin stimuj fiskalë, reduktim
                    të rregulloreve dhe grante zhvillimi. Ne do të krijojmë një mjedis miqësor
                    për bizneset që inkurajon rritjen dhe inovacionin.
                  </span>
                </div>
              </div>
            </div>

            <div className="flip-card new6">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>Cila është vizioni juaj<br/>për infrastrukturën?</p>
                </div>
                <div className="flip-card-back">
                  <span>
                    Ne planifikojmë përmirësime të mëdha në rrugë, transport publik dhe
                    infrastrukturë digjitale. Iniciativat e qytetit inteligjent do të përmirësojnë
                    shërbimet duke ruajtur efikasitetin e kostove.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-m">
          <div className="new-contnet-alignment-design-style" onClick={() => setToggle(!toggle)}>
            <a>{toggle ? 'Trego Më Pak' : 'Trego Më Shumë'}</a>
            <img className={toggle ? "animation-time rotate" : "animation-time"} src={DownIcon} alt="DownIcon"/>
          </div>
        </div>
      </div>
    </div>
  );
}
