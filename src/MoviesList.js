import Movie from "./Movie";
import { FaTrash } from "react-icons/fa";

export default function MoviesList({ movies, onRemoveMovie }) {
    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "5px 0",
                        }}
                    >
                        <span style={{display: "flex", alignItems: "center"}}>
                            <Movie title={movie.title} year={movie.year}/>
                        </span>
                        <FaTrash
                            onClick={() => onRemoveMovie(index)}
                            style={{
                                color: "grey",
                                cursor: "pointer",
                                fontSize: "20px",
                            }}
                            title="Remove movie"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
