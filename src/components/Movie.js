// we are gonna render movie here
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";


//movies component는 state를 필요로 하지 않기 때문에 클래스컴포넌트로 할 필요가 없다.
function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title" >{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="movie__genres">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
    );
}

//우리가 얻어올 props를 찾기 시작하자
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;