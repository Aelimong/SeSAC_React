import { MatzipForm } from "../../../utils/commonInterface";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 240px;
  height: 300px;
  margin: 1rem;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px rgba(180, 180, 180, 0.4);
  text-align: center;
  border-radius: 10px;
  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (max-width: 720px) {
    width: 180px;
    height: 225px;
  }
`;

interface ImgProps {
  src: string;
}

const ImgDiv = styled.div<ImgProps>`
  width: 80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  background-image: url(${(props: ImgProps) => `${props.src}`});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 840px) {
    height: 140px;
  }

  @media screen and (max-width: 720px) {
    height: 125px;
  }
`;

const DescP = styled.p`
  font-size: 14px;
  margin-top: 0.5rem;
  /* text 자르기 & 말줄임표 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* 브라우저 종류 => 사파리인 경우! -webkit-box */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default function Card({ imgSrc, title, desc }: MatzipForm) {
  return (
    <CardContainer>
      <ImgDiv src={imgSrc}></ImgDiv>
      <h3 style={{ textAlign: "center", marginTop: "12px" }}>{title}</h3>
      <DescP>{desc}</DescP>
    </CardContainer>
  );
}
