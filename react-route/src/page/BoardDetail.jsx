import { useParams } from "react-router-dom";
import img1 from "../assets/pooh1.webp";
import img2 from "../assets/pooh2.jpg";
import { NotFound } from "./NotFound";

// export default function BoardDetail() {
//   const params = useParams();
//   // params = {boardID: "2"}
//   console.log(params.boardID);
//   const { boardID } = params;
//   return (
//     <>
//       <h2>{boardID} 번 게시물입니다.</h2>
//       <h2>{params.boardID} 번 게시물입니다.</h2>
//     </>
//   );
// }

export default function BoardDetail() {
  const { boardID } = useParams();

  const boardData = [
    {
      id: 1,
      title: "1번 글",
      content: "1번 내용~~~",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "2번 글",
      content: "2번 내용~~~",
      imgSrc: img2,
    },
  ];

  // el은 foreach와 동일!!!
  // boardData.filter()는 배열로 리턴됨 어차피 값이 하나만 나오기 때문에 [0] 해준다!
  const board = boardData.filter((el) => el.id === Number(boardID))[0];

  console.log(board);

  //일치하는 게 있다면 board? 해당 컴포넌트 보여주고 없으면 NotFound!
  return board ? (
    <>
      <h1>게시글 {boardID}번</h1>
      <img src={board.imgSrc} alt={`${boardID}번 이미지`} />
      <h3>{board.title}</h3>
      <p>{board.content}</p>
    </>
  ) : (
    <NotFound />
  );
}
