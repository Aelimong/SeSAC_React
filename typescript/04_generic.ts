// <T> 는 타입!!
function printSome<T>(x: T) {
  return x;
}

//<string>이 꺽쇠에 전달되면 (x:T)의 T에 string이 들어감!
printSome<string>("a");
printSome<boolean>(true);
printSome<number[]>([1, 2, 3, 4, 5]);

function printSome2<T>(x: T, y: T): void {
  console.log(x);
  console.log(y);
}

printSome2<number>(1, 2);
printSome2<string>("안녕", "hello");

function printSome3<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}

printSome3<string, boolean>("헤이", true);

const arrLength = <T>(arr: T[]): number => {
  return arr.length;
};

const arr_1 = [1, 2, 3, 4, 5, 6]; //number[]
const arr_2 = ["pineapple", "mango"]; //string[]
const arr_3 = [[12, 13], [20, 21], [10]]; //number[number[]]

console.log(arrLength<number>(arr_1));
console.log(arrLength<string>(arr_2));
console.log(arrLength<number[]>(arr_3));

function arrElement<T>(arr: T[], index: number): T | boolean {
  if (index >= arr.length) {
    return false;
  }
  return arr[index];
}

console.log(arrElement<string>(["a", "b"], 1));
