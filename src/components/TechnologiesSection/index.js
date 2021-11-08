import React from 'react'

import { 
 TechnologiesContainer, 
 TechnologiesWrapper, 
 TechnologiesRow, 
 TechnologiesColumn1, 
 TechnologiesColumn2, 
 TechnologiesTextWrapper, 
 TechnologiesHeading, 
 TechnologiesDescription, 
 TechnologiesColummItem, 
 TechnologiesColumnBadge 
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
      <TechnologiesColumn1>
       <TechnologiesTextWrapper>
        <TechnologiesHeading>{TechnologiesData.heading}</TechnologiesHeading>
        <hr />
        <br />
        <TechnologiesDescription>{TechnologiesData.technologiesDesc}</TechnologiesDescription>
       </TechnologiesTextWrapper>
      </TechnologiesColumn1>
      <TechnologiesColumn2 style={{marginRight: '10px'}}>
       <Paper elevation={5} style={{backgroundColor: '#263C41'}}>
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {iconList.map((icon, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
           <TechnologiesColumnBadge>{icon.icon}</TechnologiesColumnBadge>
           <TechnologiesColummItem>{icon.desc}</TechnologiesColummItem>
          </Grid>
         ))}
        </Grid>
       </Box>
       </Paper>
      </TechnologiesColumn2>
     </TechnologiesRow>
    </TechnologiesWrapper>
   </TechnologiesContainer>
  </>
 )
}

export default TechnologiesSection
