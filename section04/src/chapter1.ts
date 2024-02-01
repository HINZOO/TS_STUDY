/**
 * 함수 타입 표현식
 * 함수의 매개변수와 반환타입을 미리 지정하여 함수를 깔끔하게 작성하는 방법.
 */
type Operation = (a:number, b:number) => number;//타입별칭
const add:(a:number, b:number) => number = (a, b) => a + b;//타입을 직접넣어도 된다.
const sub:Operation = (a, b) => a - b;
const multiply:Operation = (a, b) => a * b;
const divide:Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

 type Operation2 = {
  (a:number, b:number) :number;
  name:string;//하이브리드 타입 => 함수도 객체이기 때문에 가능한 표현.
 }
//  🤔함수도 객체다.
//자바스크립트의 자료형은 크게 원시 자료형과 객체 자료형으로 구분된다
//자바스크립트의 원시 자료형을 제외한 모든 자료형은 객체 자료형이다.
// 따라서 논리적으로 배열과 함수 역시 객체 자료형입니다.
//사이트 참고 : https://reactjs.winterlood.com/0f33b159-6b19-433b-8db4-68d6b4a122e0

const add2:Operation2 = (a, b) => a + b;
const sub2:Operation2 = (a, b) => a - b;
const multiply2:Operation2 = (a, b) => a * b;
const divide2:Operation2 = (a, b) => a / b;

add2(10,20)
add.name;