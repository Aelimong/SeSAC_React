import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h2>카운터 만들기 - useState</h2>
      <span>{count}&nbsp;</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
