import { useRef, useState } from "react";

export default function SetText() {
  //Dom에 접근할 것이기 때문에 자료형 HTMLInputElement
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const checkString = () => {
    console.log("state string : ", text);
    console.log("ref string : ", inputRef.current?.value);
  };

  const onClickState = () => {
    //inputRef.current.value의 형태가 null 일 수도 있어서 형태 체크 해줘야함!
    //?찍어주면 inputRef.current가 있을 때만 해당 코드가 실행 됨!
    if (typeof inputRef.current?.value == "string") {
      setText(inputRef.current.value);
      console.log("text 변경 완료");
    }
  };

  // 2. 변수로 ref 사용
  const refVal = useRef<number>(0);
  const onClickRef = () => {
    refVal.current += 1;
    console.log("ref: ", refVal.current);
  };

  return (
    <>
      <h2>useRef 사용해보기</h2>
      <p>1. Dom에 접근하는 ref</p>
      <input type="text" ref={inputRef} onChange={checkString} />
      <button onClick={onClickState}>state 변경</button>
      <div>string state : {text}</div>
      <div>string ref : {inputRef.current?.value}</div>

      <p>2. 변수로 사용하는 ref</p>
      <button onClick={onClickRef}> +1 (ref)</button>
      {/* ref는 변경된다고 바로 반영되는 게 아님! 어디선가 렌더링 되어야 함께 업데이트 됨! */}
      <div>ref value: {refVal.current}</div>
    </>
  );
}
