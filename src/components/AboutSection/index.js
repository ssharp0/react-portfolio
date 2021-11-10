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
 AboutImgDiv, 
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
        {/* <Paper style={{ background: '#6F523B' }}> */}
        <AboutHeading>{aboutData.heading}</AboutHeading>
        {/* </Paper> */}
        <hr />
        <br />
        <AboutDescription>
         {aboutData.aboutDesc}
        </AboutDescription>
        <AboutDescription>
         {aboutData.aboutDesc2}
        </AboutDescription>
        <AboutDescription>
         {aboutData.aboutDesc3}
        </AboutDescription>
       </AboutTextWrapper>
      </AboutColumn1>
      <AboutColumn2>
       <Paper elevation={8} style={{backgroundColor: '#6F523B'}}>
        <AboutImgDiv>
         <AboutImg src={SelfImg} alt='Self Pic' />
        </AboutImgDiv>
       </Paper>
      </AboutColumn2>
     </AboutRow>
    </AboutWrapper>
   </AboutContainer>
  </>
 )
}

export default AboutSection
