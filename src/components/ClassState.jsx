import { Component } from "react";

class ClassState extends Component {
  // state를 객체로 관리
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     banana: "바나나",
  //   };
  // }

  //요즘엔 이렇게 씀
  state = {
    banana: "바나나",
  };

  render() {
    const { banana } = this.state;
    return (
      <div>
        <div>{banana}</div>
        <button onClick={() => this.setState({ banana: "Banana" })}>
          영어로 변경 (Class형)
        </button>
      </div>
    );
  }
}

export default ClassState;
