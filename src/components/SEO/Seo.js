import React from 'react'
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>WH Silverbacks</title>
      <meta name="description" content="Stretch Tents, Event Construction,Temporary Structures" />
      <meta name="theme-color" content="#008f68" />
      <meta
        name="keywords"
        content="Stretch Tents, Event Construction,Temporary Structures"
      />
      <link rel="canonical" href="http:/www.whsilverbacks.co.uk" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
  )
}

export default Seo