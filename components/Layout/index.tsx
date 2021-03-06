import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
