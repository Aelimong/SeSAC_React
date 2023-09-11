import { Link } from "react-router-dom";
import styled from "styled-components";
import PracticeNav from "../components/PracticeNav";

export const Practice = () => {
  const Div = styled.div`
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  `;

  return (
    <>
      <Div>
        <h1>ReactRouter 실습</h1>
        <PracticeNav />
      </Div>
    </>
  );
};
