import React, { useEffect, useState } from 'react'
import Herobanner from './herobanner'
import AboutSection from './about'
import IssuesSection from './issues'
import NewsSection from './news'
import Chartsection from './chartsection'
import Processsection from './processsection'
import GetInvolvedSection from './getinvolved'
import Profilesection from './profilesection'
import ContactSection from './contact'
import CookieForm from '../../components/CookieForm/CookieForm'
import candidates from '../../data/candidates'

export default function Home() {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  
  // Get the default candidate (first one in the array)
  const defaultCandidate = candidates[0];

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
      <Herobanner data={defaultCandidate.heroBanner} />
      <AboutSection 
        data={{
          ...defaultCandidate.about,
          images: defaultCandidate.images
        }} 
      />
      <IssuesSection data={defaultCandidate.issues} />
      <NewsSection data={defaultCandidate.news} />
      <Chartsection data={defaultCandidate.statistics} />
      <Processsection data={defaultCandidate.process} />
      <GetInvolvedSection data={defaultCandidate.getInvolved} />
      <Profilesection data={defaultCandidate} />
      <ContactSection data={defaultCandidate.contact} />
    </div>
  )
}
