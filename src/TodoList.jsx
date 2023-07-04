import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
    <div id='divv'>
      <h1>Todo List</h1>
      <input type="text" 
      style={{
        height:"25px", 
        width:"15em", 
        borderRadius:"2px", 
        color:"green"
        }} placeholder='Enter Something' value={inputValue} onChange={handleInputChange} /> &nbsp;

        
      <button style={{backgroundColor:"blue", 
            cursor:"pointer",
            width:"100px",
            height:"30px",
            borderRadius:"5px"}} onClick={handleAddTodo}>Add</button>
            </div>

            <div>
       <ul >
        {todos.map((todo, index) => (
          <li key={index}>
            
          ✍️{todo} &nbsp;
            <button className='deleteButton'
            style={{backgroundColor:"red",
            cursor:"pointer", 
            width:"100px",
            height:"30px",
            borderRadius:"5px"

             }} onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
