import ListChild from "./ListChild";

function PracticeProps() {
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <ListChild todo="리액트 공부하기" detail="state 사용법 익히기" />
      <hr />
      <ListChild todo="저녁 먹기" detail="스타필드 맛집 정복!!" />
      <hr />
      <ListChild />
    </div>
  );
}

export default PracticeProps;
