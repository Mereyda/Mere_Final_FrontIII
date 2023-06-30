import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5 && !email.includes('@')) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    setSuccessMessage(`Gracias ${name}, te contactaremos lo antes posible vía email`);
  };

  return (
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Nombre completo:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <br />

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
        {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      </form>
     
  );
};

export default Form;