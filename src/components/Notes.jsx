import React from 'react'
import Note from './Note'

export default function Notes({notes, setNotes}) {
    const deleteNote = (id) => {
        const newNotes = notes.filter(note => id !== note.id);
        setNotes(newNotes);
    }

    const updateNote = (newNote) => {
        setNotes(
            notes.map(note => note.id === newNote.id ? newNote : note)
        );
    }

    return (
        <ul>
            {
                notes.map(note => {
                    return <Note key={note.id} updateNote={updateNote} note={note} deleteNote={deleteNote} />
                })
            } 
        </ul>
    )
}
