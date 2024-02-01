/**
 * 함수 타입 정의
 */
//🤔 함수를 설명하는 가장 좋은 방법
//->>어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
//🤔[ts] 어떤 타입의 매개변수를 받고, 어떤 타입의 결과를 반환하는지 이야기
function func(a:number,b:number){
  return a + b ;//반환은 자동추론할수도 있음
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
 const add = (a:number, b:number):number => a + b ;


 /**
  * 함수의 매개변수
  * 매개변수에 기본값을 정의하면 매개변수의 타입을 자동추론한다.
  *   주의) 기본값을 정의한 매개변수에 다른 타입을 부여하면 안된다.
  *   기본값을 정의해 자동으로 매개변수가 주어진 함수에대해서 다른 타입의 매개변수를 부여할 수 없다.
  * 🤔선택적 매개변수는 필수매개변수 뒤에 둬야한다.
  */
 function introduce(name="이영지", tall?:number){
  console.log(`name: ${name} tall에 마우스를 대보고 어떤 타입인지본다.`);
  if(typeof tall === "number"){
    console.log(`tall : ${tall+10} ,만약 tall이 undefined 타입이된다면 연산을 할수없기때문에 타입가드(typeof)를 사용`)
  }
 }

 introduce("이영지",173);
 introduce("안유진"); // ?로 매개변수를 정의했기때문에 number|undefined UNION타입이 됨을 알수있다.


function getSum(...rest:number[]){//...rest가변적문법
  let sum = 0;
  rest.forEach((it)=>(sum+=it));
  return sum;
}
getSum(1,2,3) //6
getSum(1,2,3,4,5) //15