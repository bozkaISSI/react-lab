import { useState } from "react";

export default function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [titleMessage, setTitleMessage] = useState('');
    const [yearMessage, setYearMessage] = useState('');

    function handleTitleChange(event) {
        const newTitle = event.target.value;
        setTitle(newTitle);

        let message;
        if (newTitle.length < 5) {

            message = "Tytuł jest za krótki. Nagrywają takie filmy?";
        } else if (newTitle.length < 15) {
            message = "Tytuł jest extra, w sam raz na plakat!";
        } else {
            message = "Tytuł jest za długi, nikt tego nie zapamięta.";
        }
        setTitleMessage(message);
    }

    function handleYearChange(event) {
        const newYear = event.target.value;
        setYear(newYear);

        let message;
        const yearNum = parseInt(newYear);
        if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear()) {
            message = "Wprowadź datę nie mniejszą niż 1900 i nie późniejszą niż aktualna.";
        } else {
            message = "";
        }
        setYearMessage(message);
    }

    function addMovie(event) {
        event.preventDefault();


        const yearNum = parseInt(year);
        if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear()) {
            return;
        }

        props.onMovieSubmit({ title, year });
        setTitle('');
        setYear('');
    }

    return (
        <form onSubmit={addMovie}>
            <h2>Add movie</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
                <p style={{ color: '#9b4dca', fontSize: '12px' }}>{titleMessage}</p>
            </div>
            <div>
                <label>Year</label>
                <input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    required
                />
                <p style={{ color: '#9b4dca', fontSize: '12px' }}>{yearMessage}</p>
            </div>
            <button>Add a movie</button>
        </form>
    );
}