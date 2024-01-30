/**
 * 타입 추론
 * 타입을 명시하지 않아도 자동으로 추론해준다.
 * 정확도가 100%는 아니다. 
 */

let a = 10 ; 
let b = "hello";
let c = {
  id: 1,
  name: "이영지",
  profile : {
    nickname: "괄괄"
  },
  urls: ["https://naver.com"],
};

//객체와 배열의 구조분해할당에서도 타입추론을 잘 한다.
let {id,name,profile} = c;
let [one, two, three] = [1,"hello",true];

//함수는 초기값이 아닌 반환값을 기준으로 타입을 추론한다
//매개변수에 기본값이 있다면 기본값의 타입도 추론한다.
function func(msg = "hello"){
  return "string리턴";
}


//🚫 타입추론이 예상대로 안되는 몇가지 주의점을 살펴보자.

//1) Any 타입의 진화
let d ; //anyType으로 추론 => 암묵적 any타입, 암묵적으로 정한 any타입은 진화한다. 즉 any타입을 일반적으로 지정하는것과는 다르게 동작한다.
d = 10 ; // numberType으로 추론
d.toFixed();
// d.toLowerCase();// string 타입 함수 사용불가
d = "HI";// stringType 추론
d.toLowerCase(); //사용가능
// d.toFixed();//number타입 함수 사용불가


//2) const 리터럴 타입
const num = 10 ; //number리터럴 타입으로 추론
const str = "hello";//string리터럴 타입으로 추론

//3) Union 타입 추론
let arr = [1,"string"];



//타입스크립트는 개발자가 좀더 유연하게 코딩할 수 있도록 좀더 범용적인 방향으로 타입을 추론해준다 이를 타입 넓히기 라고 한다.