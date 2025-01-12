import './App.css';
import "milligram";
import React, { useState } from 'react';

function App() {
    const [title, setTitle] = useState('Wall-E');
    const [movies, setMovies] = useState([]);

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleAddMovie() {
        if (title.trim()) {
            const newMovie = { title };
            setMovies([...movies, newMovie]);
            setTitle('');
        } else {
            alert('Tytuł filmu nie może być pusty!');
        }
    }

    let message;
    if (title.length < 5) {
        message = "Tytuł jest za krótki. Nagrywają takie filmy?";
    } else if (title.length < 15) {
        message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
    } else {
        message = "Tytuł jest za długi, nikt tego nie zapamięta.";
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            <input type="text" value={title} onChange={handleChange} />
            <button type="button" onClick={handleAddMovie}>Add Movie</button>
            <button type="button" onClick={() => alert(title)}>Pokaż tytuł filmu</button>
            {title.length > 0 && <div>{message}</div>}
        </div>
    );
}

export default App;
