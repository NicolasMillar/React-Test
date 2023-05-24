import React, { useState } from 'react'

export default function Note({note, deleteNote, updateNote}) {
    const [modeEdit, setModeEdit] = useState(false);
    const [item, setItem] = useState(note);

    const toggle = () =>{
        setModeEdit(!modeEdit)
        setItem(note);
    }

    const edit = () => {
        updateNote(item);
        setModeEdit(false);
    }

    return (
        <div>
            <li style={{marginBottom: '.6em'}}>
                <div>Id: {note.id}</div>
                {
                    modeEdit ?
                    <label htmlFor="">
                        Titulo
                        <input type="text"  value={item.title} onChange={(ev) => setItem({...item, title: ev.target.value})}/>
                    </label>
                    :<div>Titulo: {note.title}</div>
                }
                {
                    modeEdit ?
                    <label htmlFor="">
                        Cuerpo
                        <input type="text" value={item.body} onChange={(ev) => setItem({...item, body: ev.target.value})} />
                    </label>
                    :<div>Cuerpo: {note.body}</div>
                }
                <button onClick={() => toggle()}>{modeEdit ? 'Cancelar' :'Editar'}</button>
                {
                    modeEdit &&
                    <button onClick={() => edit()}>Guardar</button>
                }
                {
                    !modeEdit &&
                    <button onClick={() => deleteNote(note.id)}>X</button>
                }
                
            </li>
        </div>
    )
}
