/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
}
//처음엔 빈 객체를 두었다가 나중에 프로퍼티의 값을 넣고 싶을 때
let person = {} as Person; //타입 단언 
person.name = "이영지";
person.age = 23;

type Dog = {
  name: string,
  color: string,
}

let dog = {
  name: "춘향이",
  color: "brown",
  breed: "믹스"
} as Dog;//Dog타입으로 단언하여 초과프로퍼티 검사를 막을 수 있다. 

/**
 * 🚫 타입단언의 규칙
 * 값 as 단언 << 단언식
 * A as B 
 * 이때 A가 B의 슈퍼타입이거나
 *      A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;//A가 B의 슈퍼타입
let num2 = 10 as unknown;//A가 B의 서브타입
// let num3 = 10 as string ; //서로 겹치는 부분이 없는 타입이기 때문에 오류
let num4 = 10 as unknown as string ;//다중단언을 하면 오류가 안생기나 불안정한 코드이므로 특별한 상황아니면 쓰지말것

/**
 * const 단언
 */
let num5 = 10 as const;//const 처럼 단언해준다.

let cat = {
  name: "야옹이",
  color: "yellow"
} as const ; //모든 프로퍼티를 readOnly로 만들어준다.


/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title : "게시글1",
  author: "이영지",
}

// const len: number = post.author?.length; //옵셔널체이닝에의해 author의 값이 없으면 undefined가 될수도 있기 때문에 타입이 맞지않아 오류
const len: number = post.author!.length; //Non null단언 값이 null이거나 undefined가 아닐것이라고 믿게 만듬. => 실제로 타입을 바꾸진 않음. (위험한문법)

