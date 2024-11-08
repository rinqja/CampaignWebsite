import React, { useEffect, useState } from 'react'
import Herobanner from './herobanner'
import AboutSection from './about'
import IssuesSection from './issues'
import NewsSection from './news'
import Chartsection from './chartsection'
import Processsection from './processsection'
import EndorsementsSection from './endorsements'
import GetInvolvedSection from './getinvolved'
import Profilesection from './profilesection'
import ContactSection from './contact'
import CookieForm from '../../components/CookieForm/CookieForm'

export default function Home() {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
       {/* <CookieForm
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      /> */}
      <Herobanner />
      <AboutSection />
      <IssuesSection />
      <NewsSection />
      <Chartsection />
      <Processsection />
      <EndorsementsSection />
      <GetInvolvedSection />
      <Profilesection />
      <ContactSection />
    </div>
  )
}
