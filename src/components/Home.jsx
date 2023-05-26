import { React, useEffect, useState } from 'react'
import Form from './Form';
import Notes from './Notes';
import axios from 'axios';

export default function Dashboard(){

    const [notes, setNotes] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8080/api/notes').then((payload) => {
            setNotes(payload.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className="container">
            <h1 className="title has-text-centered mt-5">Listado de notas</h1>
            <Notes notes={notes} setNotes={setNotes}/>
            <Form notes={notes} setNotes={setNotes}/>
        </div>
        
    )
}