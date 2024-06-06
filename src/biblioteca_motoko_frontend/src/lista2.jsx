//Alta Y Baja De Libros
import React, { useState } from 'react';

function AltaLibroForm({ onAddBook }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [anio, setAnio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los campos aquí antes de enviar los datos
    const nuevoLibro = { titulo, autor, genero, anio };
    onAddBook(nuevoLibro);
    // Limpiar los campos después de agregar el libro
    setTitulo('');
    setAutor('');
    setGenero('');
    setAnio('');
  };

  return (
    <div>
      <h2>Dar de Alta Libro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Género"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Año"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          required
        />
        <button type="submit">Agregar Libro</button>
      </form>
    </div>
  );
}

function BajaLibroForm({ onSearchBook, onDeleteBook }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundBook, setFoundBook] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Lógica para buscar el libro en la base de datos
    // Aquí se simula la búsqueda y se establece el libro encontrado
    const libroEncontrado = { titulo: 'Ejemplo Libro', autor: 'Autor Ejemplo', genero: 'Ejemplo', anio: 2022 };
    setFoundBook(libroEncontrado);
  };

  const handleDelete = () => {
    // Lógica para dar de baja el libro de la base de datos
    // Aquí se simula la eliminación del libro
    onDeleteBook(foundBook);
    // Limpiar el libro encontrado después de dar de baja
    setFoundBook(null);
  };

  return (
    <div>
      <h2>Dar de Baja Libro</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar Libro"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      {foundBook && (
        <div>
          <p>Título: {foundBook.titulo}</p>
          <p>Autor: {foundBook.autor}</p>
          <p>Género: {foundBook.genero}</p>
          <p>Año: {foundBook.anio}</p>
          <button onClick={handleDelete}>Dar de Baja</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const handleAddBook = (newBook) => {
    // Lógica para agregar el libro a la base de datos
    console.log('Libro agregado:', newBook);
  };

  const handleDeleteBook = (bookToDelete) => {
    // Lógica para dar de baja el libro de la base de datos
    console.log('Libro dado de baja:', bookToDelete);
  };

  return (
    <div>
      <AltaLibroForm onAddBook={handleAddBook} />
      <BajaLibroForm onDeleteBook={handleDeleteBook} />
    </div>
  );
}

export default App;