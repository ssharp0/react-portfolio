import React from 'react'

import { 
 TechnologiesContainer, 
 TechnologiesWrapper, 
 TechnologiesRow, 

} from './TechnologiesElements'

import { iconList, TechnologiesData } from './TechnologiesData'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const TechnologiesSection = () => {
 return (
  <>
   <TechnologiesContainer id='technologies'>
    <TechnologiesWrapper>
     <TechnologiesRow>

     </TechnologiesRow>
    </TechnologiesWrapper>
   </TechnologiesContainer>
  </>
 )
}

export default TechnologiesSection
