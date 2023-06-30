import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();
    if(name.length < 5){
      // setError('el nombre debe ser mayor a 5 caracteres')
      // return;
      setError('Solo puedes ingresar letras, con un mínimo de 5 dígitos.');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    } else if (name.length < 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      return;
    }

    setSuccessMessage(
      `Gracias ${name}, te contactaremos lo antes posible vía email a ${email}`
    );
    setError('')
  };

  useEffect(()=>{
    if(successMessage){
      const msj = setTimeout(() => {
        setSuccessMessage('')

      }, 3000);
      return () => clearTimeout(msj)
    }
  },[successMessage])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ingresa tu nombre"
      />

      <br />
      <br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ingresa tu Email"
      />

      <br />
      <br />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default Form;
