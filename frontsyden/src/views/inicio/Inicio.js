import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import GridColumn from "../../components/GridColumn";
import Gap from "../../components/ui/Gap";
import "./Inicio.css";

function Inicio() {
  return (
    <section className="inicio">
      <div className="container">
        <Link to="/">
          <Logo showText={false} size="100px" />
        </Link>

        <GridColumn className="headline" column="1 / span 2">
          <div className="main-headline">
            <form className="flex card form">
            <Gap direction="horizontal">17rem</Gap>
              <Link to="/patient">
                <Button style="inicio" padding>
                  Crear Paciente
                </Button>
              </Link>
              <Gap direction="horizontal">10rem</Gap>
              <Link to="/quote">
                <Button style="inicio">Crear Citas</Button>
              </Link>
            </form>
          </div>
        </GridColumn>
      </div>
    </section>
  );
}

export default Inicio;
