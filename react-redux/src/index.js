import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// 액션의 타입에 따라 새로운 state가 리턴이 될 것임!!!
function reducer1(state = 1, action) {
  if (action.type === "증가") {
    state++;
    // 1올리고 꼭 변경한 값을 return 시켜줘야한다!! 그래야 반영 됨ㅎ_ㅎ
    return state;
  } else if (action.type === "감소") {
    // 앞에 --붙으면 연산 먼저 하고 값을 return 시켜준다!
    return --state;
  } else {
    return state;
  }
}

function reducer2(state = 0, action) {
  if (action.type === "더하기") {
    state = state + action.newNum;
    return state;
  } else if (action.type === "빼기") {
    state = state - action.newNum;
    return state;
  } else {
    return state;
  }
}

// 하나의 reducer에 분기로 나눠서 쓴 경우
// function reducer(state = 1, action) {
//   if (action.type === "증가") {
//     if (action.number && action.number !== "") {
//       state = state + Number(action.number);
//     } else if (action.number === "") {
//       state = state;
//     } else {
//       state++;
//     }
//     return state;
//   } else if (action.type === "감소") {
//     if (action.number && action.number !== "") {
//       state = state - Number(action.number);
//     } else if (action.number === "") {
//       state = state;
//     } else {
//       state--;
//     }
//     return state;
//   } else {
//     return state;
//   }
// }

const store = configureStore({ reducer: reducer2 });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
