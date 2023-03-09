import { useState } from 'react';
import React,{ Component } from 'react';



function App () {

  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  function handleRemoveItem() {
    const newItems = [...items];
    newItems.splice(newItems.length - 1, 1);
    setItems(newItems);


  };

  function handleAddItem() {
    setItems([...items, <li key={items.length}>{name} </li>]);

    setName('')

  };

  function handleNameChange(event) {
    setName(event.target.value);
  }
    
    return (
      <div>
        <h1 className='command'>Aplicación de tareas</h1>
      <div className='command'>
        <input type='text' value={name} onChange={handleNameChange} placeholder="Nombre de la lista"></input>
        <button onClick={handleAddItem} >Agregar elemento </button>
        <button onClick={handleRemoveItem} > Borrar ultimo elemento</button>
      </div>

      <ul className='lista'>
        {items}
      </ul>
      </div>
    );
  }


export default App;
