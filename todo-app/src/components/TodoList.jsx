import "../styles/style.scss";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  // filter는 콜백함수 들어가는 일종의 반복문
  const todoList = list.filter((el) => el.done === false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const nextId = useSelector((state) => state.todo.nextID);

  return (
    <section className="list-box todo-box">
      <h1 className="list-title">할일 목록</h1>
      <div className="list-area">
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            // create는 todo에서 import
            dispatch(create({ id: nextId, text: inputRef.current.value }));
            inputRef.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul className="todo-list">
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  dispatch(done(el.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
