import { React } from 'react'

export default function Dashboard(){
    const notes = [
        {id:1, title: 'nota 1', body:'prueba xD'},
        {id:2, title: 'nota 2', body:'prueba xD'},
        {id:3, title: 'nota 3', body:'prueba xD'},
        {id:4, title: 'nota 4', body:'prueba xD'},
        {id:5, title: 'nota 5', body:'prueba xD'},
    ]

    return (
        <>
            <h1>Listado de notas</h1>
            <ul>
                {
                    notes.map(note => {
                        return <li>Id: {note.id} Titulo: {note.title} Cuerpo: {note.body}</li>
                    })
                } 
            </ul>
           
        </>
        
    )
}