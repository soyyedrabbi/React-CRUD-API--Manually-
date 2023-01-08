import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'data');
            setTodos(data)
        })
        }, []);

  return (
    <div className='App'>
        <h2>All Todos</h2>
        <ul>
            {todos?.map((item) => 
                <li key = {item.id}>
                    {item.title}
                </li>
            )}
        </ul>
        <h2>The value of the counter is {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
        <hr/>
        <h2>The value of the counter2 is {counter2}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>Increase Counter</button>
    </div>
  )
}

export default App