import React from 'react'

import { 
 AboutContainer, 
 AboutWrapper, 
 AboutRow, 
 AboutColumn1, 
 AboutColumn2, 
 AboutTextWrapper, 
 AboutHeading, 
 AboutDescription, 
 AboutImgWrap, 
 AboutImg 
} from './AboutElements'

import { aboutData } from './AboutData';

import SelfImg from '../../images/self.jpeg'

import Paper from '@mui/material/Paper';

const AboutSection = () => {

 return (
  <>
   <AboutContainer id='about'>
    <AboutWrapper>
     <AboutRow>
      <AboutColumn1>
       <AboutTextWrapper>
        <AboutHeading>{aboutData.heading}</AboutHeading>
        <hr />
        <br />
        <AboutDescription>
         {aboutData.aboutDesc}
        </AboutDescription>
       </AboutTextWrapper>
      </AboutColumn1>
      <AboutColumn2>
       <Paper elevation={8} style={{backgroundColor: '#6F523B'}}>
        <AboutImgWrap>
         <AboutImg src={SelfImg} alt='Self Pic' />
        </AboutImgWrap>
       </Paper>
      </AboutColumn2>
     </AboutRow>
    </AboutWrapper>
   </AboutContainer>
  </>
 )
}

export default AboutSection
