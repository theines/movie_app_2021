// #4 2 Styling the Movies

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
  
class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] 
  };
  getMovies = async() => {
    const {
      data: {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false })//({movies:movies})원래 이런형식이고 one from state, the other from axios

  } 

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state; //this.state.isLoading 매번 하기 귀찮아서
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div> 
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id} 
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} 
                />
              ))}
            </div>
          )}
      </section>
    );
  } 
  
}

export default App;

