import PropsMap from "./components/PropsMap";
import PororoObj from "./components/practice/PororoObj";
import PracticeMap from "./components/practice/PracticeMap";
import BasicCss from "./components/BasicCss";

function App() {
  // const dataArr = [
  //   { name: "peach", krPrice: 10000, count: 5 },
  //   { name: "strawberry", krPrice: 14000, count: 1 },
  //   { name: "pear", krPrice: 5000, count: 6 },
  //   { name: "apple", krPrice: 10000, count: 10 },
  //   { name: "mango", krPrice: 20000, count: 2 },
  // ];
  return (
    <>
      {/* <PropsMap arr={dataArr} />
      <PracticeMap /> */}
      <PororoObj />
      <BasicCss color={"blue"} />
    </>
  );
}

export default App;
