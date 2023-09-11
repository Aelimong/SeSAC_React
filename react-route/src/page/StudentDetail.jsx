import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function StudentDetail() {
  const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    background-color: beige;
  `;
  const spanStyle = {
    color: "green",
    fontWeight: "900",
  };

  // 파라미터 /:studentID 가져오기
  const { studentID } = useParams();

  // 쿼리 스트링 가져오기
  const [queryPrams, setQueryPrams] = useSearchParams();
  const name = queryPrams.get("name");

  // 네비게이터
  const navigate = useNavigate();

  return (
    <>
      <Div>
        <p>
          학생의 이름은 <span style={spanStyle}>{studentID}</span> 입니다.
        </p>
        {/* name && () 안은 html이라는 뜻! */}
        {name && (
          <p>
            실제 학생의 이름은 <span style={spanStyle}>{name}</span>입니다.
          </p>
        )}
        <button onClick={() => navigate(-1)}>이전 페이지로</button>
      </Div>
    </>
  );
}
