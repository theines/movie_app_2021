// #6 1 Building the Router
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

// <Route>에는 중요한 props 두 개가 들어간다.
// 1. path : 랜더링할 스크린
// 2. component : 뭘 보여줄지 정해주는 
// <Route path="/about" component={About} /> 이렇게 해도 되는데 /이걸로 시작하는 다른 뭔가가
// 또 있으면 겹쳐서 렌더링하기 때문에 exact={true} 해줌

function App(){
  return <HashRouter>
    <Route path="/" exact={true} extcomponent={Home}/>
    <Route path="/about" component={About} />
  </HashRouter>;
}

export default App;