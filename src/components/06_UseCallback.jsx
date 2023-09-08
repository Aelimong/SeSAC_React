import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const func1 = () => {
    console.log(`number : ${number} 😀`);
  };

  const func2 = useCallback(() => {
    // 메모리에 올라간 상태 그대로 number -> 0
    console.log(`number : ${number} ❤️`);
    // 디펜던시 어레이에 넣으면 number가 바뀔 때 메모리에 콜백함수가 새로 올라감!
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경");
  }, [func1]);

  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);

  return (
    <>
      <h4>useCallback</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        함수 호출
      </button>
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue.toString()}
      </button>
    </>
  );
  /* 
  const [data, setData] = useState(null);
  
  const fetchData = useCallback(()=>{
    fetch(~~~~/${name}).then().then(({data})=>data)
  },[name])

  useEffect(()=>{}, [fetchData])
  )
  */
}
