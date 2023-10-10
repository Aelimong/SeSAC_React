import styled from "styled-components";
import { SetStateAction } from "react";

const PHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
`;

interface ColorProps {
  isTrue: boolean;
}

const Div = styled.div<ColorProps>`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: ${(props: ColorProps) => (props.isTrue ? "#ffbbbb" : "black")};
  &:hover {
    color: hotpink;
  }
`;

interface Props {
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
  mapo: boolean;
  dobong: boolean;
  gangdong: boolean;
}

export default function MatzipHeader(props: Props) {
  const { mapo, dobong, gangdong, setMapo, setDobong, setGangdong } = props;

  function setState(func: React.Dispatch<SetStateAction<boolean>>) {
    // 위에서 const { mapo, dobong, gangdong, setMapo, setDobong, setGangdong } = props;
    // 구조 분해 해줘서 그냥 setMapo 이렇게 쓰면 됨!
    setMapo(false);
    setDobong(false);
    setGangdong(false);
    func(true);
  }

  return (
    <>
      <PHeader>
        <Div onClick={() => setState(setGangdong)} isTrue={gangdong}>
          강동구
        </Div>
        <Div onClick={() => setState(setDobong)} isTrue={dobong}>
          도봉구
        </Div>
        <Div onClick={() => setState(setMapo)} isTrue={mapo}>
          마포구
        </Div>
      </PHeader>
    </>
  );
}
