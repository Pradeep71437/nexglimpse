import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/ServicesSection'
import Workflow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonals'
import Footer from './components/Footer'
// import TechStack from './components/TechStack'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className=" mx-auto pt-10 px-6">
    <HeroSection />
    </div>
    {/* <TechStack/> */}
    <FeatureSection/>
    <Workflow/>
    
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App