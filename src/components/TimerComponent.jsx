import { useEffect } from "react";

export default function TimerComponent() {
  useEffect(() => {
    //setInterval(()=>{}, 1000) -> 1초에 한 번씩 함수 내용을 실행하겠다
    // setTimeout(()=>{}, 1000) -> 1초 뒤에 함수의 내용을 실행하겠다
    const timer = setInterval(() => {
      console.log("timer 동작중");
    }, 1000);

    //setInterval 함수를 이용하면 반복이 되는 객체를 전달
    // clearSetInterval(객체 아이디) -> 반복을 해제한다!
    //타이머 컴포넌트가 소멸 될 때 셋인터벌을 끝내겠다!
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>Timer</>;
}
