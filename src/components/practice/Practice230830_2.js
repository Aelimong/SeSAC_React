import { useState } from "react";

function Practice230830_2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");
  const [opacity, setOpacity] = useState(1);
  return (
    <>
      <h1
        style={{
          color: color,
          opacity: opacity,
        }}
      >
        {text}
      </h1>
      <button
        onClick={() => {
          setColor("red");
          setText("빨간색 글씨");
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setColor("blue");
          setText("파란색 글씨");
        }}
      >
        파란색
      </button>
      <button
        onClick={() => {
          const newOpacity = opacity === 1 ? 0 : 1;
          setOpacity(newOpacity);
        }}
      >
        {opacity === 1 ? "사라져라" : "보여라"}
      </button>
    </>
  );
}

export default Practice230830_2;
