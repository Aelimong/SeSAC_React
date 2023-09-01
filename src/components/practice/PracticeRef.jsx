import { useRef, useState } from "react";

function PracticeRef() {
  const inputRef = useRef(null);
  // const divRef = useRef(null);
  const [color, setColor] = useState("white");

  function changeBgColor() {
    if (!inputRef.current?.value) return;
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: "30px",
      }}
    >
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeBgColor}>색 적용</button>
    </div>
  );
}

export default PracticeRef;
