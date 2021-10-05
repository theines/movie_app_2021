//import Potato from './Potato';//.은 같은 위치라는 뜻

// 처음엔 빈 HTML 파일이 로드되고 react가 자바스크립트를 만들어서 html로 밀어넣어준다.=>이 개념이 virtual DOM
// conmponent는 HTML을 반환하는 함수다.
// react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요해.
// javascript와 HTML사이의 조합을 JSX라고 부른다.
// 두번째로 중요한 개념은 컴포넌트에 정보를 보낼 수 있다는 점이다.

function Food({ fav }){
  // 인자로(props)받은다음 props.fav 이렇게 하는 대신에 props도 걷어내고 바로 쓸 수 있게
  // function Food({fav}){ 이렇게 할 수 있다 (es6) props object 안에는 fav가 있으니까
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/*아래는 food component의 fav라는 이름의 property, 그리고 김치라는 value를 넣음*/}
      <Food fav="kimchi" /> 
      <Food fav="ramen" /> 
      <Food fav="samkyupsal" /> 
      <Food fav="jook " /> 
      </div>
  );
}

export default App;

