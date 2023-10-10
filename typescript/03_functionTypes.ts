function print3(a: number, b: number, c = 5): void {
  console.log("----- print3 -----");
  console.log(a);
  console.log(b);
  console.log(c);
}

print3(1, 2);
print3(1, 2, 3);

function sayHello(): void {
  console.log("안녕");
}

//void 외에 다른 리턴 타입
// string
function concatStr(a: string, b: string): string {
  return a + b;
}

console.log(concatStr("안녕", "haseyo"));

// number
function circleArea(r: number): number {
  return r * r * Math.PI;
}

const squareArea = (a: number, b: number): number => {
  return a * b;
};

// 중괄호가 있으면 무조건 return 키워드 있어야하!!
const triangleArea = (w: string, h: string) => (Number(w) * Number(h)) / 2;

// never 함수의 끝에 절대 도달하지 못하게?

// ------------ 실습 ---------------
/*
1. 두 개의 '수'를 매개변수로 받고
2. 합을 console.log로 출력
*/
function sum1(a: number, b: number): void {
  console.log(sum1(11, 5));
}

/*
1. 매개변수로 숫자를 받음, 전개 연산자 이용 -> 매개변수의 개수가 상관이 없어요.
2. 매개변수로 받은 인자의 모든 합을 'return'
*/
function sum2(...arr: number[]): number {
  let result: number = 0;
  for (let num of arr) {
    result += num;
  }
  return result;
}

console.log(sum2(1, 2, 3, 4, 10));

// 오버로딩
/* 오버라이딩 vs. 오버로딩 */
/*
1. 오버라이딩 overriding
  - 클래스의 상속에서의 개념
  - 하위 클래스가 상위 클래스에게 상속 받을 때, 메소드를 '재정의' 하는 방법
  - 상위 클래스와 같은 이름의 메소드를 사용하지만 다른 내용으로 사용 가능하다
  class Car {
    constructor(year){
      this.year = year;
    }
    getYear(){
      return this.year;
    }
  }

  // 상위 클래스와 같은 메소드를 사용하지만 다르게 재정의 해서 사용
  class Truck extends Car {
    getYear(){
      return 2000 + this.year;
    }
  }

2. 오버로딩
  - 함수에서 매개변수의 개수와 타임이 다를 수 있음
  - 함수의 리턴 타임이 다를 수 있음
  - 같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
    (비슷한 기능일 때만 사용 가능)
*/
// function add(x: number | string, y: number | string): number | string {
//   return x + y;
// }

function add(x: string, y: string): string;
function add(x: number, y: number): number;

//오버로딩 때 매개변수는 any로 처리하면 된다!
function add(x: any, y: any) {
  return x + y;
}

console.log(add("hello", "world"));
console.log(add(10, 10));
// console.log(add("22", 1));
