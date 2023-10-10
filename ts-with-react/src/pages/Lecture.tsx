import { PropsType1, PropsType2, PropsType3 } from "../components/PropsType";
import Count from "../components/Count";
import SetText from "../components/SetText";
import EventObject from "../components/EventObject";
import HeaderMenu from "../components/HeaderMenu";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <PropsType1 name="애림" />
      <PropsType2
        width="200px"
        height="200px"
        color="pink"
        borderColor="black"
      />
      <PropsType3 width={200} height={200} color="yellowgreen" text="애림" />
      <Count />
      <hr />
      <SetText />
      <hr />
      <EventObject />
    </>
  );
}
