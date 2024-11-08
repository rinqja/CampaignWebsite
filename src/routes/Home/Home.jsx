import React, { useEffect, useState } from 'react'
import Herobanner from './herobanner'
import Richtungswechsel from './richtungswechsel'
import Diesesection from './diesesection'
import Richtungswechselsection from './richtungswechselsection'
import Chartsection from './chartsection'
import Processsection from './processsection'
import Kundendie from './kundendie'
import Richtungssection from './richtungssection'
import Profilesection from './profilesection'
import Kontact from './kontact'
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
       <CookieForm
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      />
      <Herobanner/>
      <Richtungswechsel/>
      <Diesesection/>
      <Richtungswechselsection/>
      <Chartsection/>
      <Processsection/>
      <Kundendie/>
      <Richtungssection/>
      <Profilesection/>
      <Kontact/>
    </div>
  )
}
