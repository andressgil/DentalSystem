import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Patient.css"

function Patient() {
    return (
        <section className='patient'>
            <Navbarhome></Navbarhome>
            <div className="container">
                <Link to="/"><Logo showText={false} size="100px"/></Link>
                <h1 className='title'><b>Crear paciente</b></h1>
                <form className='flex card form'>
                    <Input>Cédula</Input>
                    <Input>Nombres</Input>
                    <Input>Apellidos</Input>
                    <Input>Teléfono</Input>
                    <Button style="fill">Crear</Button>
                </form>
                {/* <div className='patient card'>
                    <p>
                        <Link to="/Quote">Crear Cita</Link>
                    </p>
                </div> */}
            </div>
        </section>
    );
}

export default Patient;