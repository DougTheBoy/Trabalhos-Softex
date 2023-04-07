import React from 'react';

function Contato() {
  return (
    <div>
      <h1>Entre em contato conosco</h1>
      <form>
        <label>
          Nome:
          <input type="text" />
        </label>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Mensagem:
          <textarea></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
