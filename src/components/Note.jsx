import React from 'react'

export default function Note({note, deleteNote}) {
  return (
    <div>
        <li style={{marginBottom: '.6em'}}>
            Id: {note.id} Titulo: {note.title} Cuerpo: {note.body}
            <button onClick={() => deleteNote(note.id)}>X</button>
        </li>
    </div>
  )
}
