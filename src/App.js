import './App.css';
import {useState} from "react";

function App() {
const [title, setTitle] = useState('Wall-E');

function handleChange(event) {
        setTitle(event.target.value);
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <input type="text" value={title} onChange={handleChange}/>
        </div>
    );
}

export default App;

