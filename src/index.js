//Reactのコンポーネントを書く際に必須事項
import React from 'react';
//htmlにコンポーネントを反映させる
import ReactDom from 'react-dom';

const App = ()=>{
  return (
  <>
  <h1>こんにちは!</h1>
  <p>おはよ</p>
  </>
  );
};

ReactDom.render(<App/>,document.getElementById("root"));