import { useRef } from "react";

function DOMComponent() {
  // 에러를 방지하기 위해 null을 넣어줌!
  // useRef는 특정 DOM을 조작하기 위해 사용
  const inputRef = useRef(null);
  const getInput = () => {
    // DOM에서 INPUT을 선택해 값을 가져오는 역할
    const input = document.getElementById("input");
    console.log("input value: ", input.value);
  };
  const getInput2 = () => {
    // 아래와 같이 null처리를 하기도 한다
    if (!inputRef.current) return;
    //물음표는 current가 있을 때 가져오겠다는 의미
    // inputRef.current = <input type="text" id="input" ref={inputRef} />
    // console.log("input value2: ", inputRef.current?.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
    </div>
  );
}

export default DOMComponent;
