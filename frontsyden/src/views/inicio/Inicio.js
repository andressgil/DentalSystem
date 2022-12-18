import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Inicio.css"


function Inicio() {
    return (
        <section className='inicio'>
            
            <div className="container">
                <Link to="/"><Logo showText={false} size="100px"/></Link>
                
                <form className='flex card form'>
                    <Link to="/patient"><Button style="fill" padding>Crear Paciente</Button></Link>
                    <Link to="/quote"><Button style="fill">Crear Citas</Button></Link>

                </form>
            </div>
        </section>
    );
}

export default Inicio
