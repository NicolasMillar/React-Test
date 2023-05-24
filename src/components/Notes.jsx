import React from 'react'
import Note from './Note'

export default function Notes({notes}) {
  return (
    <ul>
        {
            notes.map(note => {
                return <Note key={note.id} note={note} />
            })
        } 
    </ul>
  )
}
