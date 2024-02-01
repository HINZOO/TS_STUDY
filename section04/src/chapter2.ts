/**
 * 함수 타입의 호환성
 * 특정 함수타입을 다른함수타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 두가지가 모두 만족되야 호환될 수 있다.
 */

//기준1. 반환값이 호환되는가
//업캐스팅은 가능하지만, 다운캐스팅은 되지않는다.
type A = () => number;
type B = () => 10;

let a: A = ()=>10;
let b: B = ()=>10;
a = b; // number 와 리터럴타입 10 //업캐스팅
// b = a; // 리터럴타입 10 과 number //다운캐스팅//오류


//기준2. 매개변수가 호환되는가.
// 2-1. 매개변수의 개수가 같을 때
// 반환값과는 다르게 
// 매개변수의 타입끼리 다운캐스팅인 경우 가능하고 업캐스팅인경우 불가능하다.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) =>{};
let d: D = (value) =>{};
// c = d //매개변수끼리 업캐스팅이기때문에 불가능
 d = c //매개변수끼리 다운캐스팅이기 때문에 가능

 //🤔 왜그런지 다른 예제를 보면서 이해해보자.
 type Animal = {
  name: string;
 }
 type Dog = {
  name: string;
  color: string;
 }
 let animalFunc = (animal:Animal) => {
  console.log(animal.name);
 }
 let dogFunc = (dog:Dog) => {
  console.log(dog.name);
  console.log(dog.color);
 }
  //🤔 업캐스팅 불가능
  // animalFunc = dogFunc;
  // //이 말의 의미는 아래의 함수와 같은의미다.
  // let testFunc(animal:Animal) => {
  //   console.log(animal.name);
  //   console.log(animal.color); //🚫 animal.color는 없다.
  // }

  //😊 다운캐스팅 가능
    dogFunc = animalFunc;
    let testFunc2  = (dog:Dog) => {
      console.log(dog.name);
    }

// 2-2. 매개변수의 개수가 다를 때
//타입이 같은 매개변수일때 (당연한 기본조건!!)
//할당하려는쪽의 함수의 타입의 매개변수가 더 적을때만 호환이 된다.
type Func1 = (a:number,b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a ,b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;