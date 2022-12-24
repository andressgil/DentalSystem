import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Quote.css"


function Quote() {

    async function onSubmit(e){
        e.preventDefault()
    
        const res = await fetch("http://localhost:8080/quote",{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type":"application.json",
            },
            body: JSON.stringify({
                _id,
                fecha_hora,
                tipoProcedimiento,
                estado
            })
        })
        //@ts-ignore
        alert(res.message)
    }
    const [_id, set_id] = useState("");
    const [fecha_hora, setFecha_hora] = useState("");
    const [tipoProcedimiento, setTipoProcedimiento] = useState("");
    const [estado, setEstado] = useState("")
    

    return (

        <form onSubmit={onSubmit}>
            <section className='quote'>
            <Navbarhome></Navbarhome>
            <div className="container">
                <Link to="/"><Logo showText={false} size="100px"/></Link>
                <h1 className='title'><b>Crear Cita</b></h1>
                <form className='flex card form'>
                    <Input onChange={(v) => set_id}>Cédula</Input>
                    <Input>Nombres</Input>
                    <Input>Apellidos</Input>
                    <Input onChange={(v) => setFecha_hora}>Fecha y hora</Input>
                    <Input onChange={(v) => setTipoProcedimiento}>Tipo de procedimiento</Input>
                    <Input onChange={(v) => setEstado}>Estado</Input>
                    <Button style="fill">Crear</Button>
                </form>
            </div>
        </section>


        </form>
            );
}

export default Quote









