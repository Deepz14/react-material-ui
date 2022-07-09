import React, {useState, useEffect} from 'react'
import NoteComponent from '../components/NoteComponent';

export default function Notes() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = async(id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    });

    let newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div>
      <NoteComponent notes={notes} handleDelete={handleDelete} />
    </div>
  )
}
