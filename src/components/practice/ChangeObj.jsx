import { useState } from "react";

export default function ChangeObj({ objArr }) {
  /* 1. map 사용하지 않고 바꾸기 */
  // const [idx, setIdx] = useState(0);
  // let obj = objArr[idx];
  // function changeProfile() {
  //   if (idx === objArr.length - 1) {
  //     setIdx(0);
  //   } else {
  //     setIdx(idx + 1);
  //   }
  // }

  /* 2. map */
  const [idx, setIdx] = useState(0);

  return (
    <>
      {objArr.map((data, index) => {
        return (
          index === idx && (
            <div key={index}>
              <div>이름: {data.name}</div>
              <div>나이: {data.age}</div>
              <div>별명: {data.nickName}</div>
            </div>
          )
        );
      })}
      <button
        onClick={() => {
          idx === objArr.length - 1 ? setIdx(0) : setIdx(idx + 1);
        }}
      >
        멤버 바꾸기
      </button>
    </>
  );
}
