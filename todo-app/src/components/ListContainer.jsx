import "../styles/style.scss";
import DoneList from "./DoneList";
import TodoList from "./TodoList";

export default function ListContainer() {
  return (
    <>
      <TodoList className="container" />
      <DoneList />
    </>
  );
}
