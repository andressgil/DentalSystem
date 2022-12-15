import React from "react";
import "./forms.css"

function alerta(mensaje) {
    alert(mensaje)
}

export default function Button(props) {
    const{children} = props
    return (<button className="button" onClick={() => alerta("Se ha iniciado sesión")}>{children} </button>)
}