// 해당 함수형 컴포넌트 하나만 export 할 거기 때문에 default 사용!
export default function UseJSX() {
  /*
  1. inline style 적용해보기
   - inline 에 바로 속성 적용
   - object 선언 후 적용

  @ 자스 문법만 사용할거라면 선언은 return 밖에서 해줘야함!!!
  @ Object 형태로 스타일을 만들어서 아래에 넣어줄 수 있음@

  const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "gold",
    border: "1px solid #444",
    marginLeft: ".5rem",
    marginTop: ".5rem",
    display: "inline-block",
  };

  //요소가 많아지면 return () 소괄호 해줘야함!!
  return (
    <div>
      <div
        style={{ color: "#ffffff", width: "100px", backgroundColor: "tomato" }}
      >
        first
      </div>
      <div style={divStyle}>second</div>
      <div style={divStyle}>third</div>
    </div>
  );
   */
  /* 2. JS 문법 써보기 */
  // let isShow = true;
  // if문 쓰고 싶으면 위에서 사용하고 문자열만 아래에 넣어주기!
  // let str;
  // if (isShow === true) {
  //   str = "true입니다";
  // }
  // return (
  //   <div>
  //     {/* true일 때 보이는 div */}
  //     {/* 중괄호는 내부에 자바스크립트 쓰려고 써준 것임 */}
  //     <div style={{ backgroundColor: "red" }}>
  //       {isShow ? "true일 때 보임" : ""}
  //     </div>
  //     {/* isShow가 true일 때 && 뒤부분이 보임 */}
  //     <div style={{ backgroundColor: "orange" }}>
  //       {isShow && "true일 때 보임"}
  //     </div>
  //     {/* false일 때 보이는 div */}
  //     <div style={{ backgroundColor: "yellow" }}>
  //       {!isShow ? "true가 아니라면(false라면) 보임" : ""}
  //     </div>
  //     <div style={{ backgroundColor: "green" }}>
  //       {!isShow && "false일 때 보임"}
  //     </div>
  //     {/* if문과 for문은 jsx 문법 내에서 사용 금지!! */}
  //     <div>{str}</div>
  //   </div>
  // );

  /* 3. onClick 사용 */
  const myName = "진형";

  function myFunc() {
    alert(`안녕, 내 이름은 ${myName}이야`);
  }

  // 매개변수 있는 ver.
  function addNum(a, b) {
    alert(a + b);
  }

  return (
    <div>
      {/* JSX문법에서는 onClick={} 안에 function 이름만 써주기 */}
      <span onClick={myFunc}>hi</span>
      {/* 매개변수를 넣어야 하는 상황에서는 화살표 함수를 부르고 그 내부에 함수를 써주는 방식으로 */}
      <span onClick={() => addNum(5, 8)}>8 더하기 5</span>
      {/* 화살표 함수에 function 호출 */}
      <span onClick={() => myFunc()}>hi2</span>

      {/* <span>{myFunc()}</span>
      <span>{myFunc}</span> */}
    </div>
  );
}
