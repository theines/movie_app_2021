// #3 2 Component Life Cycle 

// react class component는 render()말고도 많은걸 가지고 있는데 이들은
// lifecyle method를 가지고 이것이 react가 component를 생성하고 없애는 방법이다!


// Mounting (constructor() ,render(),componentDidMount())
  // 컴포넌트가 생성될 때 돔에 insert될 때 호출되는 메서드
// Updating (shouldComponentUpdate(), render(),componentDidUpdate())
  // setState를 할 때 호출하면 render() -> componentDidUpdate()
// Unmounting 컴포넌트가 제거될 때 호출되는 메서드 (componentWillUnmount())

import React from "react";
  
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

   componentDidMount(){
     console.log("component rendered");
   } 
  render(){
    console.log("I'am rendering");
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

