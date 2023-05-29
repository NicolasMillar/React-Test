import { React, useState } from 'react';
import Note from './Note';
import axios from 'axios';

export default function Notes({notes, setNotes}) {
    const [errors, setErrors] = useState({
        "title" : "",
        "body" : ""
    });

    const deleteNote = (id, e) => {
        e.preventDefault();

        axios.delete(`http://localhost:8080/api/notes/${id}`).then((payload) => {
            alert(payload.data.message);
            setNotes(notes.filter(note => id !== note.id));
        }).catch(errors => {
            alert(errors.response);
        });
    }

    const updateNote = (newNote) => {
        let response = axios.put(`http://localhost:8080/api/notes/${newNote.id}`, newNote).then((payload) => {
            let {id} = payload.data.data;
            setNotes(
                notes.map(note => note.id === id ? payload.data.data : note)
            );
            return true;
        }).catch(errors => {
            setErrors(errors.response.data.messages);
            return false
        });
        return response;
    }

    return (
        <div className='columns is-multiline' >
            {
                notes.map(note => {
                    return <Note key={note.id} setErrors={setErrors} errors={errors} updateNote={updateNote} note={note} deleteNote={deleteNote} />
                })
            } 
        </div>
    )
}
