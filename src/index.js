import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//react application은 하나의 component만을 redering해야하기 때문에 App.js말고 다른걸 여기에 추가 할 수는 없다
// App.js에 추가 가능하다
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


