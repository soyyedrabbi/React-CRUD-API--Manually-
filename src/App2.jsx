// import './App.css';
import {useState} from 'react';
const App2 = () => {
    // let counter = 0;

    // const [count, setCount] = useState(10);
    // const [count2, setCount2] = useState(100);

    const [counterObj, setCounterObj] = useState({
        count1: 0,
        count2: 100
    })
    
    const increaseHandler = (value) => {
        // counter++;
        // console.log(counter)
        // setCount(count + value);
        setCounterObj({
            ...counterObj,
            count1: counterObj.count1 + value,
            count2: counterObj.count2 + value
        })
    }
    const decreaseHandler = (value) => {
        // counter--;
        // console.log(counter)
        // setCount(count - value);
        setCounterObj({
            ...counterObj,
            count1: counterObj.count1 - value,
            count2: counterObj.count2 - value
        })
    }
    return (
        <div className="App">
            <h2>The value of the counter is {counterObj.count1}</h2>
            <h2>The value of the counter2 is {counterObj.count2}</h2>
            
            <button onClick={()=>increaseHandler(1)}>Increase By 1</button>
            <button onClick={()=>increaseHandler(5)}>Increase By 5</button>
            
            <button onClick={()=>decreaseHandler(1)}>Decrease By 1</button>
            <button onClick={()=>decreaseHandler(2)}>Decrease By 2</button>
        </div>
    )
}

export default App2