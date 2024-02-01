/**
 * 사용자 정의 타입가드
 */

 type Dog = {
  name: string;
  isBark: boolean;
 }

 type Cat = {
  name: string;
  isScratch: boolean;
 }

 type Animal = Dog | Cat;


function warning (animal:Animal){
  if( "isBark" in animal){
    //강아지
  }else if ("isScratch" in animal){
    //고양이
  }
}
//위의 코드는 가독성도 떨어지고 타입의 변수를 변경했을때 오류가 생기기 쉽다.
//하지만 typeof를 쓸수없는 사용자용이며, 서로소 유니온을 쓸수없다고 가정할 때 다음과 같이 해준다.
function isDog(animal: Animal): animal is Dog{ //2) 이함수가 트루이면 Dog타입으로 나온다는 것을 의미
  return (animal as Dog).isBark !== undefined; //1)타입단언을 하여 isBark가 있을때만 Dog타입임을 명시한다.
 }

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
} 

 function warning2 (animal:Animal){
  if(isDog(animal)){
    //강아지
  }else if (isCat(animal)){
    //고양이
  }
}