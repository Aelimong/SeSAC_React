import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./page/Profile";
import { Board } from "./page/Board";
import { Index } from "./page/Index";
import { NotFound } from "./page/NotFound";
import { Practice } from "./page/Practice";
import BoardDetail from "./page/BoardDetail";
import StudentDetail from "./page/StudentDetail";

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/profile">프로필</a>
          </li>
          <li>
            <a href="/board">게시판</a>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        {/* 실습 라우팅 */}
        <Route path="/student/:studentID" element={<StudentDetail />}></Route>
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
