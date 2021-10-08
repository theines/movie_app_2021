import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            {/* 그냥 a태그로 하게 되면 새로고침되면서 리액트가 죽는다 그래서 링크사용 */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;