import React from 'react'

export default function Note({note}) {
  return (
    <div>
        <li>Id: {note.id} Titulo: {note.title} Cuerpo: {note.body}</li>
    </div>
  )
}
