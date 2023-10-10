import { Link } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <h1>Practice</h1>
      <ul>
        <li>
          <Link to="matzip">맛집 모음</Link>
        </li>
      </ul>
    </>
  );
}
