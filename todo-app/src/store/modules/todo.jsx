const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "척추의 요정이 말합니다! 척추 펴기!",
      done: false,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ],
};

// id 전역 관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState["nextID"] = count;

// 밖에서는 못 쓴다!
// action 정의
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

// 액션을 리턴하는 거라 전부 오브젝트!
// 해당 기능은 밖에서 사용할 수 있도록 export!
export function create(payload) {
  // 액션은 무조건 type이 필요
  return {
    type: CREATE,
    payload, // object {id: 0, text: "운동하기", done: "false"}
  };
}

export function done(id) {
  return {
    type: DONE,
    id, // number -> 해당 할일의 id를 보낼 예정!
  };
}

// [1,2,3].concat(4) === [1,2,3,4]
export function todo(state = initialState, action) {
  /**
  action = {
    type: "todo/CREATE",
    payload: {
      id: 3,
      text: 점심먹기
    }
  }

  action = {
    type: "todo/DONE",
    id: 1
  }
   */
  switch (action.type) {
    case CREATE:
      return {
        //기존에 있던 state(list)를 뿌려줄 것임
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      // 기존의 list에서의 id와 action으로 들어온 id가 같다면 false => true
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              /*
              해당 오브젝트와 동일!! 가지고 오고 덮어준다!
              id: 0,
              text: 점심먹기,
              done: false,
              done: true
              */
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
