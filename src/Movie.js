// we are gonna render movie here
import PropTypes from "prop-types";
import "./Movie.css";


//movies component는 state를 필요로 하지 않기 때문에 클래스컴포넌트로 할 필요가 없다.
function Movie({ id, year, title, summary, poster }){
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie_data">
                <h3 class="movie_title" >{title}</h3>
                <h5 class="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

//우리가 얻어올 props를 찾기 시작하자
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;