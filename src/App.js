import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

function App() {
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
  );
}

export default App;
