import React from "react";
import Card from "./utils/Card";
import Input from "./forms/Input";
import Gap from "./utils/Gap";
import Button from "./forms/Button";

export default function Login() {
  return (
    <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
      <h1>Syden</h1>
      <Gap>2rem</Gap>
      <Input>Ususario</Input>
      <Gap>0.5rem</Gap>
      <Input type="password">Contraseña</Input>
      <Gap>1.2rem</Gap>
      <Button>Iniciar sesión</Button>
    </Card>
  );
}
