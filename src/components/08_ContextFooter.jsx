import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextFooter() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundColor: isDark ? "black" : "white",
        }}
      >
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          모드 변경
        </button>
      </footer>
    </>
  );
}
