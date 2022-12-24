import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import "./Login.css"

export function Login() {

    async function onSubmit(e){
        e.preventDefault()
        
        
        const res = await fetch("http://localhost:8080/login",{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type":"application.json",
            },
            body: JSON.stringify({
                user,
                password
            })
        })
        //@ts-ignore
        alert(res.message)
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("") 


    return (
        <form onSubmit={onSubmit}>
            <section className='login'>
         
         <div className="container">
             <Link to="/"><Logo showText={false} size="80px"/></Link>
             <h1 className='title'><b>Iniciar Sesión</b></h1>
             <p>¡Que gusto verte nuevamente!</p>
             <form className='flex card form'>
                 <Input onChange={(v) => setUser}>Usuario</Input>
                 <Input type="password" onChange={(v) => setPassword}>Contraseña</Input>
                 <Link to="/inicio"><Button style="fill">Iniciar Sesión</Button></Link>
             </form>
                          
         </div>
     </section>
        </form>
        
    );
}

export default Login;