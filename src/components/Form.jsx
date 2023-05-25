import { React, useState } from 'react'

export default function Form({notes, setNotes}) {
    const initialNotes = {id: '', title: '', body:''}
    const [note, setNote] = useState(initialNotes);

    const addNotes = (ev) => {
        ev.preventDefault();
        if(note.body.trim() !== "" || note.title.trim() !== ""){
            const id = notes.length+1;
            setNotes([
                ...notes,
                {
                    ...note,
                    id: id
                }
            ])
        }
        setNote(initialNotes);
    }

    return (
        <div className="has-background-success-light">
            <form onSubmit={(ev) => addNotes(ev)}>
                <div className="field">
                    <label htmlFor="">Titulo</label>
                    <div className="control">
                        <input id='title' className='input' value={note.title} type="text" onChange={(ev) => setNote({...note, title: ev.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="">Cuerpo</label>
                    <div className="control">
                        <textarea className='textarea' id='body' value={note.body} type="text" onChange={(ev) => setNote({...note, body: ev.target.value})} ></textarea>
                    </div>
                </div>
                <button className='button is-primary'>Agregar</button>
            </form>
        </div>
    )
}
