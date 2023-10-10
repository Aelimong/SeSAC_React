export default function EventObject() {
  // 객체 타입 이름 적어줘야함! handleClick이 어떻게 사용 될 지 모르기 때문에!
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e);
    console.log(e.target);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target);
    console.log(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    console.log(e.key);
    console.log(e.code);
  }

  return (
    <>
      <h2>이벤트 객체 타입 확인</h2>
      <div
        onClick={(e) => {
          console.log(e);
        }}
      >
        onClick
      </div>
      <div onClick={(event) => handleClick(event)}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>

      <div>
        onChange:
        <input type="text" onChange={(e) => handleChange(e)} />
      </div>

      <div>
        onKeyDown:
        <input type="text" onKeyDown={(e) => handleKeyDown(e)} />
      </div>

      {/* <span onDrag={(e) => handleDrag(e)} style={{ backgroundColor: "orange" }}>
        DRAG
      </span> */}
    </>
  );
}
