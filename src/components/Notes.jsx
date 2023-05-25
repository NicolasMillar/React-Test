import React from 'react'
import Note from './Note'

export default function Notes({notes, setNotes}) {
    const deleteNote = (id, e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => id !== note.id);
        setNotes(newNotes);
    }

    const updateNote = (newNote) => {
        setNotes(
            notes.map(note => note.id === newNote.id ? newNote : note)
        );
    }

    return (
        <div className='columns is-multiline' >
            {
                notes.map(note => {
                    return <Note key={note.id} updateNote={updateNote} note={note} deleteNote={deleteNote} />
                })
            } 
        </div>
    )
}
