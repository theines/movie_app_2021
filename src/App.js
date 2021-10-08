// #6 3 Sharing Props Btw Routes

// 모든 Route는 prop을 기본적으로 보낸다.
// 그래서 네비게이션에서 about을 누르면 props를 화면으로 보낼거다.
// 그리고 영화를 클릭하면 movie detail페이지로 갈꺼다.(데이터를 보낼것임) 


import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>

  );
}

export default App;