import { useRef, useState } from "react";

function PracticeCalculator() {
  const refInput = useRef(null);
  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);

  const calc = ["+", "-", "*"];
  const operator = calc[Math.round(Math.random() * 2)];

  let [result, setResult] = useState(0);

  console.log(operator, num1, num2);

  function calculateNums() {
    if (operator === "+") {
      setResult(num1 + num2);
    } else if (operator === "-") {
      setResult(num1 - num2);
    } else if (operator === "*") {
      setResult(num1 * num2);
    } else {
      alert("이상합니다!");
    }
  }
  function checkAnswer() {
    if (!refInput.current) return;

    calculateNums();

    if (refInput.current.value === result) {
      alert("정답입니다😀❤️");
    } else {
      alert(`틀렸습니다😭 정답은 ${result}입니다!`);
    }
  }

  return (
    <>
      <h1 style={{ color: "blue" }}>실습</h1>
      <div>
        {num1} {operator} {num2}
      </div>
      <input type="text" ref={refInput} />
      <button onClick={checkAnswer}>정답제출</button>
    </>
  );
}
export default PracticeCalculator;
