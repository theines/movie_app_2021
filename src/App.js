// #2 2 Dynamic Component Generation
// 어떻게 object의 list를 가져오는지 배워보자.

// map은 array의 각 item에 function을 적용하고 array를 반환한다.

const girlILike = [
  {
    id: 1,
    name: "꽃게",
    image:
      "https://pbs.twimg.com/media/EFCwGJTUEAE3OB_.jpg"
  },
  {
    id: 2,
    name: "단무지",
    image:
      "https://pbs.twimg.com/media/FAz41SBVIAEwwOf?format=jpg&name=small"
  },
  {
    id: 3,
    name: "브이",
    image:
      "https://pbs.twimg.com/media/FAKE3Y3WYAQdDOR?format=jpg&name=900x900"
  },
  {
    id: 4,
    name: "뽀",
    image:
      "https://pbs.twimg.com/media/FAPPwjCVkAQAs5p?format=jpg&name=900x900"
  },
]

//component
function Girl({ name, picture }){
  return <div>
    <h2>하! {name}걸!</h2>
    <img src={picture} alt={name} />
  </div>;
}

/* 화살표함수를 안쓰면 이렇게 된당
function renderFood(girl){
  return <Girl name={girl.name} picture={girl.image} />
} */

function App() {
  return (
    <div className="App">
      {/* jsx안에서 {}이렇게 하면 javascript이다.
      girlILike.map은 girlILike이라는 object형식의 배열을 돌면서 화살표 다음의 행동을 실행한다.
      <Girl name={item.name}은 Girl라는 컴포넌트에 name이라는 이름의 속성에다가 배열을 돌면서 object.name을 넣어준다
      */}
      {girlILike.map(girl => ( 
        <Girl key={girl.id} name={girl.name} picture={girl.image} />
        ))}
      </div>
  );
}

export default App;

