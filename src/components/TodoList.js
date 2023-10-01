// TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex !== null) {
        // Edit an existing todo
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = inputValue;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        // Add a new todo
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setInputValue(todos[index]);
  };

  return (
    <div className="design-container">
      <div className="container">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo}>
            {editingIndex !== null ? 'Edit' : 'Add'}
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
