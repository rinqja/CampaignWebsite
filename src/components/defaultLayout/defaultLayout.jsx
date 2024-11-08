import React, { useState } from "react";
import Footer from "../footer";
import CookieForm from "../CookieForm/CookieForm";
export default function DefaultLayout({ children }) {

  return (
    <>
     

      {children}
      <Footer />
    </>
  );
}
