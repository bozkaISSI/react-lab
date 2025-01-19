import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
    const appStyle = { marginLeft: "1.3rem", marginTop: "1.3rem" };
    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [titleMessage] = useState("");

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
        <div style={appStyle}>
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
                    titleMessage={titleMessage}
                    buttonLabel="Add a movie"
                />
            )}
        </div>
    );
}

export default App;
