import Movie from "./Movie";
import {FaFilm} from "react-icons/fa";
import {FaTrashCan} from "react-icons/fa6";

export default function MoviesList({ movies, onRemoveMovie }) {
    return (
        <div>
            <h2>Movies List</h2>
            <ul style={{listStyleType: "none", padding: 0}}>
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px 0",
                        }}
                        >
                        <span style={{display: "flex", alignItems: "center"}}>
                            <FaFilm
                                style={{
                                    marginRight: "10px",
                                    color: "#9b4dca",
                                    fontSize: "20px",
                                    marginBottom: "1.0rem",
                                }}
                            />
                            <Movie title={movie.title} year={movie.year}/>
                        </span>
                        <FaTrashCan
                            onClick={() => onRemoveMovie(index)}
                            style={{
                                color: "#e64949",
                                cursor: "pointer",
                                fontSize: "20px",
                                marginBottom: "1.0rem",
                                marginLeft: "1.0rem",
                            }}
                            title="Remove movie"
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}
