import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = { // state는 동적 데이터 또는 생겨나고 사라지는 다이나믹한 것을 변경하고 싶을 때 쓰고,
           // props is used for the data that is fixed and not changing all the time.
           // state is object and there is space for data.
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })//({movies:movies})원래 이런형식이고 one from state, the other from axios

  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; //this.state.isLoading 매번 하기 귀찮아서
    return (
      /* 여기 원래 <section class="container"> 이랬는데 그냥 class하면 
        javascript안에서는 component class에 의해 리액트가 혼란스러워져서 className으로 바꿈
      */
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

}

export default Home;