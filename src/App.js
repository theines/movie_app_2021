// #3 3 Planning the Movie Component
// #4 0 Fetching Movies from API

import React from "react";
import axios from "axios";
  
class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] 
  };
  // 당연한 javascriptmagic 이지만 await 뒤에 있는게 끝날 때까지 기다리게 하는거야.
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  // #3-3 처음 render를 하면 호출되는 life cycle method는 무엇일까? -> componentdidmount()
  // 이론적으로 "Loading"대신 우리가 할 일은 componentDidMount에서 data를 fetch하는 거야
  // 그런 다음에 "we are ready"대신 map을 만들고 movie를 render하는거야.
  componentDidMount(){
    /* #3-3
      setTimeout(() => {
      // 만약에 여기서 state에 선언되지 않은것을 써도 에러가 안난다.
      this.setState({isLoading: false});
    },6000); */
  
    // #4-0 우리는 axios로 부터 온 data를 잡을 필요가 있다.
    // axios.get은 빠르지 않아서 우리는 javascript에게 componentDidMount 함수가 끝날때까지
    // 약간 시간이 걸릴 수 있다고 말해줘야 한다.
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state; //this.state.isLoading 매번 하기 귀찮아서
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  } 
  
}

export default App;

