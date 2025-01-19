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
            message = "The title is too short. Do they even make movies like this?";
        } else if (newTitle.length < 15) {
            message = "The title is great, perfect for a movie poster!";
        } else {
            message = "The title is too long, no one will remember it.";
        }
        setTitleMessage(message);
    }

    function handleYearChange(event) {
        const newYear = event.target.value;
        setYear(newYear);

        let message;
        const yearNum = parseInt(newYear);
        if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear()) {
            message = "Please enter a year not earlier than 1900 and not later than the current year.";
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
