import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../forms/Button';
import "./Navbarhome.css"


function Navbarhome() {

    return (
        <>
            <nav className='navbar'>
                <ul className='menu flex container'>
                    <li><Link to="/"><Logo size="34px" showText={true} /></Link> </li>
                    <li><Link to="/"><Button style="wire">Inicio</Button></Link></li>
                </ul>
            </nav >

            <Outlet></Outlet>
        </>
    );
}

export default Navbarhome