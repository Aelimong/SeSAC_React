import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  //useSelector 인자로 콜백함수가 들어감
  const number = useSelector((state) => state);
  // const number = useSelector((state) => {
  //   return state;
  // });

  const dispatch = useDispatch();

  return (
    <>
      <h2>store의 값 가져오기 (useSelector 이용)</h2>
      <p>store에 저장되어 있는 state는 {number}</p>
      <p>store의 state 변경 (useDispatch 이용)</p>
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "감소" });
        }}
      >
        -
      </button>
    </>
  );
}
