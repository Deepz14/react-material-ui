import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function NoteComponent({ notes, handleDelete }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {
          notes.map(note => (
            <Grid key={note.id} item xs={12} md={6} lg={3}>
               <Card elevation={1}>
                   <CardHeader
                      action={
                      <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlinedIcon />
                      </IconButton>
                      }
                      title={note.title}
                      subheader={note.category}
                      >
                   </CardHeader>
                   <CardContent>
                      <Typography variant="body2" color="textSecondary">
                          {note.details}
                      </Typography>
                   </CardContent>
               </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default NoteComponent