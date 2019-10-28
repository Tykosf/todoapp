import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

const App = () => {
  const [storage, setStorage] = 
  useState({ 
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  })

  const handleChange = (e) => {
    setStorage({
      ...storage,
      item: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: storage.id,
      title: storage.item
    }
    if (storage.item.trim().length === 0) return; 
    const updatedItems = [...storage.items, newItem];
    setStorage({
      ...storage,
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  };

  const clearList = () => {
    setStorage({...storage, items: [] });
  };

  const handleDelete = (id) => {
    const filteredItems = storage.items.filter(item => item.id !== id)
    setStorage({ items: filteredItems })
  }

  const handleEdit = (id) => {
    const filteredItems = storage.items.filter(item => item.id !== id);
    const selectedItem = storage.items.find(item => item.id === id);
    setStorage({
      ...storage,
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>Todo input</h3>
          <TodoInput 
            item={storage.item} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            editItem={storage.editItem}
          />
          <TodoList 
            items={storage.items} 
            clearList={clearList} 
            handleDelete ={handleDelete}
            handleEdit = {handleEdit}
          /> 
        </div>
      </div>
    </div>
  );
}

export default App;
