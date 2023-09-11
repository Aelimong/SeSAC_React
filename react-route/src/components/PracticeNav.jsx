import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PracticeNav() {
  const Nav = styled.nav`
    width: 100%;
    display: flex;
    height: 70px;
    justify-content: end;
    align-items: center;
  `;
  const MyLink = styled(Link)`
    color: olive;
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 18px;
    &:hover {
      color: white;
    }
  `;

  return (
    <Nav>
      <MyLink to="/student/sean">학생</MyLink>
      <MyLink to="/student/codingon">코딩온</MyLink>
      <MyLink to="/student/new?name=jisu">searchParams</MyLink>
    </Nav>
  );
}
