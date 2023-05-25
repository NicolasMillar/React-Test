import { React, useEffect, useState } from 'react'
import Form from './Form';
import Notes from './Notes';
import axios from 'axios';

export default function Dashboard(){

    const [notes, setNotes] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((payload) => {
            console.log(payload);
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