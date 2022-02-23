//Reactのコンポーネントを書く際に必須事項
import React from 'react';
//htmlにコンポーネントを反映させる
import ReactDom from 'react-dom';
import App from "./App";

ReactDom.render(<App/>,document.getElementById("root"));