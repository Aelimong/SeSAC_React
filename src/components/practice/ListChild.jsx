function ListChild({ todo, detail }) {
  return (
    <div>
      <h2>{todo}</h2>
      <p>{detail}</p>
    </div>
  );
}

ListChild.defaultProps = {
  todo: "특정 할 일",
  detail: "구체적인 실천 방안",
};

export default ListChild;
