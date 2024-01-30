/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합타입과 교집합타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */
 let a : string | number | boolean; //무한대로 추가할 수 있다.
 a = 10;
 a = "str";
 a = true;

 let arr: (number|boolean|string) []= [1,"hello",true];


 type Dog = {
  name: string;
  color: string;
 };

 type Person = {
  name: string;
  language: string;
 };

 type Union1 = Dog | Person; //타입 별칭으로 Union타입 생성

 let union1:  Union1 = {
  name: "",
  color: ""
 }

 let union2:  Union1 = {
  name: "",
  language: ""
 }

 let union3:  Union1 = {
  name: "",
  color: "",
  language: "" ,
 }

//  let union4:  Union1 = {//두 타입이 공통으로 가지고있는 프로퍼티만 넣었을때는 되지 않음.
//   name: "",
//  }

//🤔Union1이 의미하는것은 dog, person, 그리고 dog와person의 합집합만 해당한다. 즉 교집합 프로퍼티만 존재하는  union4는 해당하지 않는다.
/**
 * 1. 교집합 - Intersection 타입
 */

let variable: number& string ; //기본타입은 왠만하면 never타입이 된다. 겹치는것이 없기때문

type Intersection = Dog & Person;

let intersection : Intersection = {//🚫 모든 프로퍼티를 다 가지고 있어야 오류가 없다. 
  name: "",
  color: "",
  language: "",
}

// let intersection2 : Intersection = {//🤔 흔히 생각하는 공통의 프로퍼티만을 가지는 집합을 생각하면 안된다.
//   name: ""
// }