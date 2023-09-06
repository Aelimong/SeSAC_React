import PropsMap from "./components/PropsMap";
import PororoObj from "./components/practice/PororoObj";
import PracticeMap from "./components/practice/PracticeMap";
import BasicCss from "./components/BasicCss";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

function App() {
  // const dataArr = [
  //   { name: "peach", krPrice: 10000, count: 5 },
  //   { name: "strawberry", krPrice: 14000, count: 1 },
  //   { name: "pear", krPrice: 5000, count: 6 },
  //   { name: "apple", krPrice: 10000, count: 10 },
  //   { name: "mango", krPrice: 20000, count: 2 },
  // ];

  // 리액트는 순서대로 읽기 때문에 무조건 선언을 먼저 해줘야한다!!
  const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
  `;
  const RootDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #282c34;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AppHeader = styled.header`
    color: #ffffff;
  `;

  const AppLogo = styled.img`
    width: 100%;
    animation: ${rotate} 7s linear infinite;
  `;

  const MyA = styled.a`
    color: #61dafb;
  `;

  return (
    <>
      {/* <PropsMap arr={dataArr} />
      <PracticeMap /> */}
      {/* <PororoObj />
      <BasicCss color={"blue"} /> */}
      <RootDiv>
        <AppHeader>
          <AppLogo src={logo} alt="app" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyA
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </MyA>
        </AppHeader>
      </RootDiv>
    </>
  );
}

export default App;
