import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import Navbarhome from '../../components/ui/Navbarhome';
import "./Login.css"

function Login() {
    return (
        <section className='login'>
            {/* <Navbarhome></Navbarhome> */}
            <div className="container">
                <Link to="/"><Logo showText={false} size="80px"/></Link>
                <h1 className='title'><b>Iniciar Sesión</b></h1>
                <p>¡Que gusto verte nuevamente!</p>
                <form className='flex card form'>
                    <Input>Usuario</Input>
                    <Input type="password">Contraseña</Input>
                    <Link to="/inicio"><Button style="fill">Iniciar Sesión</Button></Link>
                </form>
                {/* <div className='patient card'>
                    <p>
                      <Link to="/Patient">Crear un Paciente</Link>
                    </p>
                </div> */}
                
            </div>
        </section>
    );
}

export default Login;