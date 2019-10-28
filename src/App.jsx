<<<<<<< HEAD
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
=======
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import uuid from "uuid";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    }
  }

  handleChange = (e) =>{
      this.setState({
          item: e.target.value
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items,newItem];
    this.setState({
      items: updatedItems,
      item: "",
>>>>>>> d640257707603c0c674ca783e605d8f228ec7d59
      id: uuid(),
      editItem: false
    })
  };

<<<<<<< HEAD
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
=======

  clearList = () =>{
    this.setState({
      items: []
    });
  };

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => 
      item.id !== id
      )
      this.setState({
        items: filteredItems
      })
  }

  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
>>>>>>> d640257707603c0c674ca783e605d8f228ec7d59
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

<<<<<<< HEAD
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
=======
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete ={this.handleDelete}
              handleEdit = {this.handleEdit}
            /> 
          </div>
        </div>
      </div>

    );
  }
>>>>>>> d640257707603c0c674ca783e605d8f228ec7d59
}

export default App;
