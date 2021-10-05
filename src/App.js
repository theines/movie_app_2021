import Potato from './Potato';//.은 같은 위치라는 뜻

// 처음엔 빈 HTML 파일이 로드되고 react가 자바스크립트를 만들어서 html로 밀어넣어준다.=>이 개념이 virtual DOM
// conmponent는 HTML을 반환하는 함수다.
// react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요해.
// javascript와 HTML사이의 조합을 JSX라고 부른다.
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato />
      </div>
  );
}

export default App;

