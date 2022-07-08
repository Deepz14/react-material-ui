import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';

export default function Create() {
  return (
    <Container>
      <Typography 
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        variant="contained" 
        color="secondary"
        endIcon={<SendIcon />}>
        Submit
      </Button>
    </Container>
  )
}
