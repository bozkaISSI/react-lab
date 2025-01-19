export default function Movie({ title, year }) {
    return (
        <li>
            {title} {year && `(${year})`}
        </li>
    );
}
