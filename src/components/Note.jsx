import React, { useState } from 'react'

export default function Note({note, deleteNote, updateNote}) {
    const [modeEdit, setModeEdit] = useState(false);
    const [item, setItem] = useState(note);

    const toggle = (e) =>{
        e.preventDefault();
        setModeEdit(!modeEdit)
        setItem(note);
    }

    const edit = (e) => {
        updateNote(item);
        e.preventDefault();
        setModeEdit(false);
    }

    return (
        <div className='column is-one-quarter'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Id: {note.id}
                    </p>
                </header>
                <div className="card-content">
                    <div className="card-content">
                        {
                            modeEdit ?
                            <div className="field">
                                <label htmlFor="">Titulo</label>
                                <div className="control">
                                    <input className='input' type="text"  value={item.title} onChange={(ev) => setItem({...item, title: ev.target.value})}/>
                                </div>
                            </div>
                            :<div>Titulo: {note.title}</div>
                        }
                        {
                            modeEdit ?
                            <div className="field">
                                <label htmlFor="">Cuerpo</label>
                                <div className="control">
                                    <textarea className='textarea' type="text" value={item.body} onChange={(ev) => setItem({...item, body: ev.target.value})} ></textarea>
                                </div>
                            </div>
                            :<div>Cuerpo: {note.body}</div>
                        }
                    </div>
                </div>
                <footer className="card-footer">
                    <a href={'/'} className="card-footer-item" onClick={(e) => toggle(e)}>{modeEdit ? 'Cancelar' :'Editar'}</a>
                    {
                        modeEdit ?
                        <a href={'/'} className="card-footer-item" onClick={(e) => edit(e)}>Guardar</a>
                        :
                        <a href={'/'} className="card-footer-item" onClick={(e) => deleteNote(note.id, e)}>Eliminar</a>
                    }
                </footer>
            </div>
        </div>
    )
}
