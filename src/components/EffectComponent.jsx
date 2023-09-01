import { useEffect, useRef, useState } from "react";
export default function EffectComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력 하세요!");
  const inputValue = useRef();
  const onButtonClick = () => {
    setCount(count + 1);
  };
  const onInputChange = () => {
    setText(inputValue.current.value);
  };

  // useEffect(()=>{}) -> 항상 (생성, 업데이트, 소멸)
  // useEffect(()=>{}, []) -> 생성시에만
  // useEffect(()=>{}, [값]) -> 값이 바뀔 때마다(업데이트 시에만)
  useEffect(() => {
    console.log("🎨 렌더링 할 때마다 실행되는 useEffect");
  });

  useEffect(() => {
    console.log("🖱 버튼 클릭 시에만 실행되는 useEffect");
  }, [count]);

  useEffect(() => {
    console.log("⌨ 인풋 입력 시에만 실행되는 useEffect");
  }, [text]);

  useEffect(() => {
    return () => {
      console.log("========= 사라질 때 실행되는 useEffect");
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange}></input>
      <h1>{text}</h1>
    </>
  );
}
