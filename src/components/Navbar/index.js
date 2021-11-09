import React, { useState, useEffect } from 'react'

import { CgMoreVerticalR } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib'

import { animateScroll as scroll } from 'react-scroll'

import { 
  NavSection, 
  NavContainer, 
  NavLabel, 
  MobileDrop, 
  NavMenu,  
  NavScrollLinks,
} from './NavbarElements'

import { NavbarData } from './NavbarData'

const Navbar = ({ toggle }) => {
  
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const [positionScrollNav, setpositionScrollNav] = useState(false)

  const updateNavbarFormat = () => {
    if (window.scrollY >= 65) {
      setpositionScrollNav(true)
    } else {
      setpositionScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updateNavbarFormat)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavSection positionScrollNav={positionScrollNav}>
          <NavContainer>

          </NavContainer>
        </NavSection>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
