import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextMain() {
  // const data = useContext(ThemeContext);
  // console.log(data);

  //구조분해 이용하여 넣어준 것!
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <main
        className="content"
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <p>안녕하세요!</p>
      </main>
    </>
  );
}
