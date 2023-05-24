import { React, useState } from 'react'

export default function Form({notes, setNotes}) {
    const initialNotes = {id: '', title: '', body:''}
    const [note, setNote] = useState(initialNotes);

    const addNotes = (ev) => {
        ev.preventDefault();
        if(note.body !== "" || note.title !== ""){
            const id = notes.length+1;
            setNotes([
                ...notes,
                {
                    ...note,
                    id: id
                }
            ])
        }
        
    }

    return (
        <form onSubmit={(ev) => addNotes(ev)}>
            <label htmlFor="title">
                Titulo
                <input id='title' type="text" onChange={(ev) => setNote({...note, title: ev.target.value})} />
            </label>
            <br />
            <label htmlFor="body">
                Cuerpo
                <input id='body' type="text" onChange={(ev) => setNote({...note, body: ev.target.value})} />
            </label>
            <br />
            <button>Agregar</button>
        </form>
    )
}
