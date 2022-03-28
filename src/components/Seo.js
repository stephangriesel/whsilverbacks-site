import React from 'react'
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>SandySoil Property Management</title>
      <link rel="canonical" href="http:/www.sandysoil.co.za" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
  )
}

export default Seo