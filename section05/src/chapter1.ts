/**
 * 인터페이스의 확장
 */

interface Animal{
  name: string;
  color: string;
}

// interface Dog {
//   name: string;
//   color: string;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }

//위의 타입정의는 중복된 프로퍼티정의가 많아 비효율적임을 알 수 있다.

//🍊extends 를 통해 타입을 확장한다
//확장하는 타입은 인터페이스가 아닌 type 별칭 으로 선언된것도 가능하다.
//즉 객체타입이면 다 가능하다.
type  Animal2 = {
  name: string;
  color: string;
}

interface Dog extends Animal { //Animal의 프로퍼티를 다 가지고 추가로 Dog내의 프로퍼티를 가진다.
  name: string;
  // name:'hello'//타입을 재정의 할 수있다. 단, 원본타입의 서브타입으로만 가능하다. //현재예시에 관련없는 number 타입등으로 변경불가.
  isBark: boolean;
}
const dog: Dog = {
  name:"hello",
  color: "",
  isBark: true,
}
interface Cat extends Animal{
  isScratch: boolean;
}

interface Chicken extends Animal2 {
  isFly: boolean;
}

//🍊확장은 여러개도 가능하다 => 다중확장 가능.
interface DogCat extends Dog, Cat {};

const dogCat: DogCat = {
  name: "hello",
  color: "",
  isBark: true,
  isScratch: true,
}