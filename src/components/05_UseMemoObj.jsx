import { useState, useEffect, useMemo } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };

  // [] 디펜던시 어레이라고 한다!
  // useMemo에 어레이, 오브젝트가 들어갔을 때 필수!
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  /*
  const location = isKorea ? "한국" : "외국";
  오브젝트 -> 문자열로 변경하는 게 효율 측면에서 좋습니다!

  오브젝트나 배열을 useEffect의 의존성 배열에 넣지 않아도 되는 경우라면,
  useMemo를 사용하지 않는 편이 더 좋습니다.
  */

  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다.👀");
  }, [location]);

  return (
    <>
      <h4>useMemo 써보기</h4>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      <div>{number}</div>
      <hr />
      <div>{location.country}</div>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        나라 바꾸기
      </button>
    </>
  );
}
