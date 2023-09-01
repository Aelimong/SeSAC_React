import { useEffect, useState } from "react";

export default function PracticeTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

// 주광님 풀이
// let count = 0;
// export default function PracticeTimer() {
//   const [time, setTime] = useState(count);
//   useEffect(() => {
//     count = 0;
//     setTime(count);
//     const timer = setInterval(() => {
//       count++;
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <>
//       <h1>{time}</h1>
//       <button
//         onClick={() => {
//           setTime(count);
//         }}
//       >
//         시간
//       </button>
//     </>
//   );
// }
