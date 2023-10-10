// tuple
/* 
  tuple = 배열
  - 길이와 타입이 지정되어 있는 배열
*/
let drink: [string, string] = ["cola", "cider"];
drink[0] = "콜라";
console.log(drink);
// drink[1]=2; string 요소를 number로 바꾸려고 한다면 error!
drink.push("str");
console.log(drink);

// readonly 속성은 새로운 요소를 추가할 수 없다!!
let drink2: readonly [string, number] = ["cola", 4000];

// drink2.push("사이다");
// drink2[0] = "콜라";

console.log(drink2[0]);
console.log(drink2[1]);

/** enum */
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco, // 0
  vanilla = 10,
  strawberry, // 2
  kiwi = "kiwi",
}

console.log(Cake.choco, Cake.vanilla, Cake.strawberry, Cake.kiwi);

let olimpic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성 계주" },
  true,
];

console.log(olimpic_newgame);

/* interface & type */
interface Student {
  name: string;
  isPassed: boolean;
}

// Student와 같은 key를 가져와야함!!
const student1: Student = {
  name: "jh",
  isPassed: false,
};

type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  // ? 써줬다는 건 써도 되고 안 써도 되는 key라는 의미
  // readonly는 값을 변경할 수 없음!!!
  readonly backNumber?: number;
  // grade는 의미론적으로 써준 단어~! key 값이 아님!!
  // Score 안에는 type Score = "A+" | "A" | "B" | "C" | "D" | "F";
  //배열로 선언해서 숫자를 여러개 쓸 수 있다!
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  weight: 95.4,
  height: 193,
  backNumber: 17,
  1: "A",
  2: "A+",
  3: "F",
};

otani.position = "투수";
// console.log(otani);
// otani.backNumber = 20; readonly error!

otani["1"] = "B";
console.log(otani);

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {
    console.log("이름은 " + this.name + "입니다. ");
  },
  color: "blue",
  price: 50000,
};

console.log(toyCar);
toyCar.start();

// interface는 그냥 {} type은 = 써줘야함!
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "daniel",
  gender: "Female",
  age: 20,
};

type Gender = "Male" | "Female";

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "덤블도어",
  gender: "Male",
};

type Category = "액션" | "롤플레잉";
type Platform = "모바일" | "웹";

// interface 실습
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: Platform;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
