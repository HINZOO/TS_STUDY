/**
 * 인터페이스
 */

interface Person{
  readonly name: string;
  age?: number;
  // sayHi: () => void;
  sayHi():void; //이렇게도 가능. //⚾
  sayHi(a:number,b:number) : void; //** 오버로드시그니처(이때는 반드시 호출시그니처를 사용한다. 화살표함수는 알아듣지못함.)
}
//아래함수는 ⚾ 내용과 같다.헷갈리지말것
// type Func = {
//   (): void; 
// }

//**인터페이스로 정의된 타입은 유니온 타입처럼 선언할수 없다
//예를들면 interface Person {} | string 이런식이 불가능.
//Union으로 사용하고 싶으면  아래와 같이 type으로 정의한다.
type Type1  = number | string | Person;
type Type2  = number & string & Person;

//** 아니면 아래와 같이 타입 주석에 사용한다.
const person: Person|number = {
  name: "이영지",
  age: 23,
  sayHi: function(){
    console.log("Hi")
  },
};

// person.name = "변경안됨"

//🤔이름표기에 대하여..
// 회사마다 다르지만 일반적으로 인터페이스는 I를 붙이기도 한다
//해당방법은 헝가리안표기법인데 대부분 카멜이나 파스칼을 쓰기때문에 회사의 규칙을따르자..
interface IPerson{
  name: string;
 
}