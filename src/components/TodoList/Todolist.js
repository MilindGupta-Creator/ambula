import React, { useState } from 'react';
import './Todolist.css';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [cart, setCart] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const addToCart = (task) => {
    setCart([...cart, task]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalItemsInCart = cart.length;
  const subtotal = cart.length * 1.99; // Assuming each task costs $1.99


  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
            <span className='added-to-cart' onClick={() => addToCart(task)}>+</span>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index} className="cart-item">
            <span>{cartItem.text}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total items in cart: {totalItemsInCart}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
    </div>
  );
}

export default Todolist;
