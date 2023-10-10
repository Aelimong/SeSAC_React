import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Practice() {
  const number = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputRef = useRef(0);

  return (
    <>
      <h6>{number}</h6>
      <input type="number" ref={inputRef} />
      <button
        onClick={() => {
          dispatch({ type: "더하기", newNum: Number(inputRef.current?.value) });
          inputRef.current.value = "";
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: "빼기", newNum: Number(inputRef.current?.value) });
          inputRef.current.value = "";
        }}
      >
        빼기
      </button>
    </>
  );
}
