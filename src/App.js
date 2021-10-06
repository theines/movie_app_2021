// #3 0 class components and state 
// funtion component를 class component로 변경 할 것이다.

import React from "react";

// react class component에서 가져온다 extends 뒤에가 더 큰 개념
class App extends React.Component{
  // state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다. 변한다?
  // 이전에는 prop을 써서 하드코딩을 한거고 나는 동적으로 변하는 코드가 필요한데 state가 그것을 도와줄 것이다.
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  // class component는 render method를 가지고있고 이것은 App component안에 있다(react component에서 확장했기때문에)
  // react는 자동적으로 너의 class component의 render method를 실행한다.
  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1> 
        <button onClick={this.add}>Add</button>{/* reactMagic~~내장함수감사쓰 */}
        <button onClick={this.minus}>Minus</button>
      </div> 
    );
  }
 
}

export default App;

