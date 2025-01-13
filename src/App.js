import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import MovieForm from "./MovieForm";
import "milligram";

function App() {
    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        document.title = "My Movie App";
    }, []);

    function addMovie(movie) {
        setMovies([...movies, movie]);
        setShowForm(false);
    }

    function removeMovie(index) {
        setMovies(movies.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>My Favourite Movies to Watch</h1>

            {movies.length === 0 ? (
                <p>No movies added yet. Add your first movie!</p>
            ) : (
                <MoviesList movies={movies} onRemoveMovie={removeMovie} />
            )}

            {!showForm && (
                <button onClick={() => setShowForm(true)}>Add a Movie</button>
            )}

            {showForm && (
                <MovieForm
                    onMovieSubmit={addMovie}
                    buttonLabel="Add a movie"
                />
            )}
        </div>
    );
}

export default App;
