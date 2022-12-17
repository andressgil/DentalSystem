import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Quote.css"


function Quote() {
    return (
        <section className='quote'>
            <Navbarhome></Navbarhome>
            <div className="container">
                <Link to="/"><Logo showText={false} size="100px"/></Link>
                <h1 className='title'><b>Crear Cita</b></h1>
                <form className='flex card form'>
                    <Input>Cédula</Input>
                    <Input>Nombres</Input>
                    <Input>Apellidos</Input>
                    <Input>Fecha y hora</Input>
                    <Input>Tipo de procedimiento</Input>
                    <Input>Estado</Input>
                    <Button style="fill">Crear</Button>
                </form>
            </div>
        </section>
    );
}

export default Quote









