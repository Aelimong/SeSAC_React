import { useState } from "react";
import PracticeTimer from "./components/practice/PracticeTimer";
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <PracticeTimer />}
      <button onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button>
    </>
  );
}

export default App;
