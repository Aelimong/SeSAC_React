import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Matzip from "../src/pages/Matzip";
import Lecture from "../src/pages/Lecture";
import Practice from "../src/pages/Practice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/matzip" element={<Matzip />} />
      </Routes>
    </>
  );
}

export default App;
