import React from 'react';
import Button from '../../components/forms/Button';
import "./Home.css"
// // @ts-ignore
import illustration from "../../assets/home_illustration.jpg"
import GridColumn from '../../components/GridColumn';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='header'>
            <div className='grid container'>

                <GridColumn className="headline" column="1 / span 2">
                    <div className='main-headline'>
                        <p className='title'>Somos</p>
                        <p className='content'>TU MEJOR OPCIÓN</p>
                    </div>
                    <p className='supp-headline'>
                        Maneja eficientemente tu tiempo con <b>Syden App</b>.
                    </p>
                    <Link to="/patient"><Button style="fill">Crear Paciente</Button></Link>
                </GridColumn>

                <GridColumn className="illustration" column="span 3">
                    <img src={illustration}></img>
                </GridColumn>
            </div>
        </section>
    );
}

export default Home;