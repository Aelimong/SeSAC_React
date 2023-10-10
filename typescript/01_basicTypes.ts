//선언 할 때만 타입 설정, 재할당 할 때는 JS와 동일
// 1. number type
let num: number = 1;
num = 2;

// 2. string type
let str1: string = "안녕하세요";

console.log(str1, num);

// 3. boolean, null, undefined
let isTrue: boolean = true;
let undef: undefined;
const empty: null = null;

// 4. object
const obj1: object = {
  name: "aelim",
  age: 30,
};

// 5. array 안에 들어갈 값들의 자료형도 선언해줘야함!
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["a", "b", "c", "d"];
let arr3: Array<string> = ["a", "b"];

//이 배열에는 string이거나 number가 들어가야해여~~
let arr4: Array<string | number> = ["a", "b", "c", 1, 2, 3];
let arr5: (string | number)[] = ["a", "b", "c", 1, 2, 3];

// let arr6: Array<boolean | null | number[]> = [true, null, [1, 2, 3]];
let arr6: (boolean | null | number[])[] = [true, null, [1, 2, 3]];

console.log(arr6[0]);
arr6[1] = [5, 6, 7];
// arr6[2] = "str"; 선언할 때 부여한 type이 아니라면 오류를 보여무

// 어떤 자료형이든 들어갈 수 있지만 사용하는 걸 지양함!
let arrAny: any[] = [1, 2, "apple", null, true, undefined];
