import React from 'react'

import { 
 ContactContainer, 
 ContactWrapper, 
 ContactRow, 

} from './ContactElements'

import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Accordion, AccordionSummary, AccordionDetails, Button, Paper, Typography } from '@mui/material'

import { contactDetails, contactData } from './ContactData';

const ContactSection = () => {
 
 return (
  <>
   <ContactContainer id='contact'>
    <ContactWrapper>
     <ContactRow>

     </ContactRow>
    </ContactWrapper>
   </ContactContainer>
  </>
 )
}

export default ContactSection