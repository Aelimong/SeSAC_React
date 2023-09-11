import { Link } from "react-router-dom";
export const Board = () => {
  return (
    <>
      <h1> 게시판 페이지 입니다.</h1>

      {/* /부터 시작하면 루트부터 시작됨 */}
      <Link to="/board/1">1번 게시물</Link>

      {/* 현재 컴포넌트가 board에 라우팅 되어 있기 때문데 현재 경로인 board 부터 시작됨 */}
      <Link to="2">2번 게시물</Link>
    </>
  );
};
