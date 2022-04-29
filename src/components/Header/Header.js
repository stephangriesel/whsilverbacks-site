import React from 'react'
import Navbar from '../Navigation/Navbar'
import BrandHeader from '../BrandHeader/BrandHeader'

// Import header styles 
import Head from '../../UI/Head/Head'
import Layout from '../../UI/Layout/Layout'

const Header = () => {
  // return statement & jsx template
  return (
    <Layout>
      <header className="App-header">
        <Head>
          <BrandHeader />
          <Navbar />
        </Head>
      </header>
    </Layout>
  )
}

export default Header

