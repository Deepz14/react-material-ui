import React, {useState, useEffect} from 'react'

export default function Notes() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      {
        notes.map(note => (
          <p key={note.id}>{note.title}</p>
        ))
      }
    </div>
  )
}
