import { useState } from "react";

export default function FunctionState() {
  /* 4. useState로 언어 변경 */
  const [showEnglish, setShowEnglish] = useState(true);
  // let showEnglish = true;
  return (
    <div>
      <div>{showEnglish ? "apple" : "사과"}</div>
      <button onClick={() => setShowEnglish(!showEnglish)}>
        {showEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );

  /* 3. javascript로 언어 변경 */
  // function changeLang() {
  //   let apple = document.querySelector(".state div");
  //   apple.innerText === "사과"
  //     ? (apple.innerText = "apple")
  //     : (apple.innerText = "사과");
  // }
  // return (
  //   <div className="state">
  //     <div>사과</div>
  //     <button onClick={() => changeLang()}>언어 변경</button>
  //   </div>
  // );

  /* 2. useState 이용해서 변수 변경 */
  //apple이라는 변수는 setApple로만 변경할 수 있다!!!!
  //let apple = "사과"; 과 동일
  // const [apple, setApple] = useState("사과");
  // return (
  //   <div>
  //     <div>{apple}</div>
  //     {/* 값을 변경하면 해당 컴포넌트만 새로고침 됨!!! */}
  //     <button onClick={() => setApple("apple")}>영어로 바꾸기!</button>
  //   </div>
  // );

  /* 1. 자바스크립트로 변수 변경 */
  // let apple = "사과";
  // function inEng() {
  //   const content = document.querySelector(".state .apple");
  //   content.innerText = "APPLE";
  //   // apple이라는 변수를 바꿨는데 반영이 안 됨ㅠ
  //   apple = "APPLE";
  //   console.log(apple);
  // }
  // return (
  //   <div className="state">
  //     <div className="apple">사과</div>
  //     <div>{apple}</div>
  //     <button onClick={() => inEng()}>영어로 바꾸기!</button>
  //   </div>
  // );
}
