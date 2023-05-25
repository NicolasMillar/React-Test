import { React, useState } from 'react'
import Form from './Form';
import Notes from './Notes';

export default function Dashboard(){

    const [notes, setNotes] = useState([
        {id:1, title: 'nota 1', body:'prueba xD'},
        {id:2, title: 'nota 2', body:'prueba xD'},
        {id:3, title: 'nota 3', body:'prueba xD'},
        {id:4, title: 'nota 4', body:'prueba xD'},
        {id:5, title: 'nota 5', body:'prueba xD'},
    ]);

    

    return (
        <div className="container">
            <h1 className="title has-text-centered mt-5">Listado de notas</h1>
            <Notes notes={notes} setNotes={setNotes}/>
            <Form notes={notes} setNotes={setNotes}/>
        </div>
        
    )
}