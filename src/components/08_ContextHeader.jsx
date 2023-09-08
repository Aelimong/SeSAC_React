import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextHeader() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <header
        className="header"
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <h1>header</h1>
      </header>
    </>
  );
}
