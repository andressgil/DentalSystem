import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Patient.css"


function Patient() {

    async function onSubmit(e){
        e.preventDefault()
    
        const res = await fetch("http://localhost:8080/patient",{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type":"application.json",
            },
            body: JSON.stringify({
                _id,
                nombre,
                apellido,
                telefono
            })
        })
        //@ts-ignore
        alert(res.message)
    }
    const [_id, set_id] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("")
    
   
    return (
        <form onSubmit={onSubmit}>
            <section className='patient'>
            <Navbarhome></Navbarhome>
            <div className="container">
            
                <Link to="/"><Logo showText={false} size="80px"/></Link>
                <h1 className='title'><b>Crear paciente</b></h1>
                 <form className='flex card form'>
                    <Input onChange={(v) => set_id }>Cédula</Input>
                    <Input onChange={(v) => setNombre }>Nombres</Input>
                    <Input onChange={(v) => setApellido }>Apellidos</Input>
                    <Input onChange={(v) => setTelefono }>Teléfono</Input>
                    <Button style="fill">Crear</Button>
                 
                </form>
                        
            </div>
        </section>


        </form>
            );
}

export default Patient;