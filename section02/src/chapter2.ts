/* 배열 */
//배열타입정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["안녕","나는","학습중이야"];
let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우 
let multiArr: (number | string | boolean)[]  = [ 1,"hello",true];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]

/* 튜플; Tuple */
//ts에서만 존재, 길이와 타입이 고정된 배열
let tup1: [number,number] = [1,2]; //number타입 2개로 이뤄진 배열
// tup1 = [3]; //오류
// tup1 = ["1","2"]; //오류

let tup2: [number,string,boolean] = [1,"안녕",true];
// tup2 = ["안녕",true,1] ;//오류 >> 순서가 바뀌어도 안됨.
//🍊주의
//실제로 튜플은 컴파일을 해보면 일반 배열과 똑같다.
//따라서 배열자체는 아예 값을 넣을수 없는것이 아닌 pop이나 push로 그값을 늘리고 줄이고 할 수 있다.
//하지만 사용시에 주의할것..

//실제 tuple을 사용하는 상황
const users: [string, number][] = [
  ["김아무개", 12],
  ["박아무개", 13],
  ["이아무개", 14],
  // [15,"이렇게쓰면오류남"],// 이런상황들을 방지하기위함.
];