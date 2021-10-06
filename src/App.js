/* #5 0 Deploying to Github pages
package.json의 맨 마지막 줄에 
  "homepage": "https://theines.github.io/movie_app_2021" 넣었고
스크립트에
  "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "deploy": "gh-pages -d build",
      "predeploy": "npm run build"
    },
마지막 두 줄 추가했다. 기능설명은 predeploy가 build하라고 하면 build script가 폴더를 만들어주고 그렇게 predeploy가 끝나면 deploy script가 폴더를 가지고 deploy한다.
*/

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
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

export default App;

