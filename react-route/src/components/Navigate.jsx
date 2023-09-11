import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigate() {
  const inputRef = useRef();
  const Div = styled.div`
    padding: 4px;
    box-shadow: 0px 0px 5px #777777aa;
    cursor: pointer;
    background-color: greenyellow;
  `;

  const navigate = useNavigate();

  //inputRef.current 은 input을 셀렉트 하는 것과 동일!
  const controllProfile = () => {
    if (inputRef.current.value.length > 5) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "pink",
          justifyContent: "space-evenly",
        }}
      >
        <Div onClick={() => navigate(-1)}>뒤로가기</Div>
        <Div onClick={() => navigate(1)}>앞으로 가기</Div>
        <Div onClick={() => navigate(-2)}>뒤로 두 번 가기</Div>
        <Div onClick={() => navigate("/")}>홈으로 가기</Div>
        <Div onClick={() => navigate("/board")}>보드 페이지</Div>
        <Div onClick={() => controllProfile()}>프로필 페이지</Div>
      </div>
      <input type="text" ref={inputRef} />
    </>
  );
}
