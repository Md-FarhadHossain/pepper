import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Overview from '../components/Overview/Overview'
import TrustedTeam from '../components/TrustedTeam/TrustedTeam'
 

const Main = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <TrustedTeam />
        <Overview />
    </>
  )
}

export default Main