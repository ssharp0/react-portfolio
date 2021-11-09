import React, {useState} from 'react'

import SidebarNav from '../components/SidebarNav'
import Navbar from '../components/Navbar'
import HeaderOpenSection from '../components/HeaderOpenSection'
import AboutSection from '../components/AboutSection'
import TechnologiesSection from '../components/TechnologiesSection'
import ProjectsSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {

 const [isSideNavOpen, setIsSideNavOpen] = useState(false)

 const toggle = () => {
  setIsSideNavOpen(!isSideNavOpen)
 }

 return (
  <>
   <SidebarNav isSideNavOpen={isSideNavOpen} toggle={toggle} />
   <Navbar toggle={toggle} />
    <HeaderOpenSection />
    <AboutSection />
    <TechnologiesSection />
    <ProjectsSection />
    <ContactSection />
   <Footer />
  </>
 )
}

export default Home
