import React from 'react';
import Note from './Note';
import axios from 'axios';

export default function Notes({notes, setNotes}) {
    const deleteNote = (id, e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => id !== note.id);
        setNotes(newNotes);
    }

    const updateNote = (newNote) => {
        axios.put(`http://localhost:8080/api/notes/${newNote.id}`, newNote).then((payload) => {
            let {id} = payload.data.data;
            setNotes(
                notes.map(note => note.id === id ? payload.data.data : note)
            );
        }).catch(errors => {

        })

        
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
