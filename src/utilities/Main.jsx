import React from 'react'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import Features from '../components/Features/Features'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Overview from '../components/Overview/Overview'
import Services from '../components/Services/Services'
import TrustedTeam from '../components/TrustedTeam/TrustedTeam'
 

const Main = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <TrustedTeam />
        <Overview />
        <Services />
        <Features />
        <AboutCompany />
    </>
  )
}

export default Main