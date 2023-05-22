import { React, useState } from 'react'

export default function Dashboard(){
    const initialNotes = {id: '', title: '', body:''}

    const [notes, setNotes] = useState([
        {id:1, title: 'nota 1', body:'prueba xD'},
        {id:2, title: 'nota 2', body:'prueba xD'},
        {id:3, title: 'nota 3', body:'prueba xD'},
        {id:4, title: 'nota 4', body:'prueba xD'},
        {id:5, title: 'nota 5', body:'prueba xD'},
    ]);

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
        <>
            <h1>Listado de notas</h1>
            <ul>
                {
                    notes.map(note => {
                        return <li key={note.id}>Id: {note.id} Titulo: {note.title} Cuerpo: {note.body}</li>
                    })
                } 
            </ul>
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
           
        </>
        
    )
}