import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';


export default function Create() {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('todos');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if(title && details){
      setTitleError(false)
      setDetails(false);
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography 
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{marginTop: 5, display: 'block'}}
          onChange={(e) => setTitle(e.target.value)}
          color="secondary"
          label="Note title"
          variant="outlined" 
          fullWidth 
          required
          error={titleError}
        />
        <br />
        <br />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          color="secondary"
          label="Details"
          variant="outlined" 
          multiline
          rows={4}
          fullWidth 
          required
          error={detailsError}
        />
       
        <FormControl sx={{marginTop: 5,  marginBottom: 5, display: 'block'}}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio color='secondary' />} label="Money" />
            <FormControlLabel value="todos" control={<Radio color='secondary' />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color='secondary' />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color='secondary' />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained" 
          color="secondary"
          endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  )
}
