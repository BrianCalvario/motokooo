//Pagina Principal
import { useState } from 'react';
import { Biblioteca1_backend } from 'declarations/Biblioteca1_backend';
import 'bootstrap/dist/css/bootstrap.min.css';
function App1() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Biblioteca1_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Ingresa Tu Nombre: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Aceptar</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App1;
