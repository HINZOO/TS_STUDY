/**
 * 선언 합침
 */

// 타입별칭은 동일한 이름으로 두번 정의하면 오류가 나지만
// 인터페이스로 선언한 타입은 동일한이름으로 두번 정의해도 오류가 나지않는다.
// 이때 자동으로 두 타입은 합쳐지게 된다.
// 이때 같은 프로퍼티의 타입이 다르면 선언충돌이 일어난다.

interface Person{
  name: string;
}
interface Person{
  name: string;
  age: number;
}
const person: Person = {
  name:"",
  age:17,
};

interface Developer extends Person{
  name: "hello";//확장시 타입변경이 가능하나, 선언합침의 과정에서 타입변경은 불가능하다.
}

//선언합침은 주로 모듈보강작업을 할때 사용한다
/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
//모듈은 보통 수정을 할수 없기때문에 선언합침을 사용한다.
interface Lib{
  c: string;
}
const lib = {
  a: 1,
  b: 2,
  c:"추가로 c 를 담아야한다면 선언합침을 사용해~"
}