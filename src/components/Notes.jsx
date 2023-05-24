import React from 'react'
import Note from './Note'

export default function Notes({notes, setNotes}) {
    const deleteNote = (id) => {
        console.log(id);
        const newNotes = notes.filter(note => id !== note.id);
        setNotes(newNotes);
    }

    return (
        <ul>
            {
                notes.map(note => {
                    return <Note key={note.id} note={note} deleteNote={deleteNote} />
                })
            } 
        </ul>
    )
}
