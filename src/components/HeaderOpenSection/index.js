import React, { useState } from 'react'
import Typed from 'react-typed'

import {
 HeaderOpenContainer,
 HeaderOpenBg,
 HeaderOpenContent,
 HeaderOpenHeading,
 HeaderOpenSubHeading,
} from './HeaderOpenElements'

import ParticlesBackGround from '../Particles'

const HeaderOpenSection = () => {

 return (
  <HeaderOpenContainer>
   <HeaderOpenBg>
    <ParticlesBackGround />
   </HeaderOpenBg>
   <HeaderOpenContent>
    <HeaderOpenHeading>
     <Typed strings={["Hello, I'm Scott."]} typeSpeed={75} />
    </HeaderOpenHeading>
    <HeaderOpenSubHeading>
     <Typed strings={['Web Development', 'Full Stack Software Engineering', 'MERN']} typeSpeed={70} backSpeed={90} loop />
    </HeaderOpenSubHeading>
   </HeaderOpenContent>
  </HeaderOpenContainer>
 )
}

export default HeaderOpenSection
