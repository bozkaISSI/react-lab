import Movie from "./Movie";

export default function MoviesList({ movies }) {
    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <Movie key={index} title={movie.title} year={movie.year} />
                ))}
            </ul>
        </div>
    );
}
