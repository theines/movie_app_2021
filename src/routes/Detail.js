

/* 이렇게 했었는데 문제점이 클릭을 해야지만 디테일에 접근할 수가 있어서
    class component로 만들어줌
function Detail({location}){
    console.log(location);
    return <span>Hello</span>;
}
 */

import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        // 사용자가 url로 접근하는 것을 리다이렉트 
        // 디테일 페이지는 무조건 클릭으로만 접근 하게끔
        if(location.state === undefined ){
            history.push("/");
        }
    }
    render(){
        //const { location } = this.props; 그냥 하니까 location없다고 에러뜸 
        const { location } = this.props;  
        if (location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;  
        }

    }
}


export default Detail;