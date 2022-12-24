import React from 'react';
import "./HistoryQuotes.css"

function History(props) {

    const {data} = props

    const {cedula,nombre, apellido, fechayhoracita, procedimiento, estado} = data

    return (
        <div className='quote grid card'>
            <p className='cedula'>{cedula}</p>
            <p className='nombre'>{nombre}</p>
            <p className='apellido'>{apellido}</p>
            <p className='date'>{fechayhoracita}</p>
            <p className='procedimiento'>{procedimiento}</p>
            <p className='estado'>{estado}</p>
        </div>
     );
}

export default History;