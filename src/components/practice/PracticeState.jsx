import { useState } from "react";

export default function PracticeState() {
  const [number, setNumber] = useState(0);

  // state 변수가 바뀌면 새로고침(리렌더링) 되기 때문에 변수도 계속 초기화 됨!
  let variable = 0;
  function setVariable() {
    variable += 1;
    console.log(`변수 (variable) : ${variable} / 스테이트 (state) : ${number}`);
  }

  return (
    <div>
      <div>
        {number}
        {/* 삼항 연산자 이용 */}
        {number > 7 ? "😡" : "😆"}
      </div>
      <button
        onClick={() => {
          setNumber(number + 1);
          setVariable();
        }}
      >
        +1
      </button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </div>
  );
}
