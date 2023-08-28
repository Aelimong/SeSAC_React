// import UseJSX from "./components/UseJSX";
// import FirstPractice from "./components/practice/FirstPractice";
// import ClassCom from "./components/ClassCom";
// import FunctionState from "./components/FunctionState";
// import ClassState from "./components/ClassState";
// import PracticeState from "./components/practice/PracticeState";
// import FunctionProps from "./components/FunctionProps";
import { ClassProps } from "./components/ClassProps";

function App() {
  return (
    <div>
      {/* <UseJSX></UseJSX>
      <FirstPractice />
      <ClassCom /> 
      <FunctionState />
      <ClassState />
      <PracticeState />
      */}
      {/* 변수나 숫자를 넘길 때는 중괄호 안에 넘겨 주기! */}
      {/* <FunctionProps name="사과" number="2" krPrice={5000} />
      <FunctionProps name="샤인머스켓" number="3" krPrice={20000} />
      <FunctionProps name="복숭아" />
      <FunctionProps>여기가 children입니다!</FunctionProps> */}
      {/* <PracticeProps /> */}
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0286cb" />
      <ClassProps name="루피" nickname="공주" color="#ed9095" />
    </div>
  );
}

export default App;
