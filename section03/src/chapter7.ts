/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상홯에 따라 좁히는 방법
 */

//value가  number 일때는 toFixed
//value가  string 일때는 toUpperCase를 실행하도록 하는 함수
function func(value: number|string){
  value; //이때 타입은 n Union s 이다.
  // 타입이 확실하지않기 때문에 아래의 함수를 쓸 수 없다.
  // value.toFixed();
  // value.toUpperCase();
  if(typeof value === "number"){//타입가드(typeof 를 통해 특정스코프에서 특정타입만을 보장한다.)
    console.log(value.toFixed())
  }else if (typeof value === "string"){
    console.log(value.toUpperCase());
  }
}

type Person = {
  name: string;
  age : number;
}

function func1(value: number|string|Date|null|Person){
  if(typeof value === "number"){
    console.log(value.toFixed())
  }else if (typeof value === "string"){
    console.log(value.toUpperCase());
  // }else if (typeof value == "object"){//ojbect는 null도 인지하기때문에  적합한 코드는 아니다.
  }else if (value instanceof Date){ //instanceof 클래스 를 이용해 확실하게 보장.=> instanceof 는 클래스만 가능 타입은 불가능하다.
    console.log(value.getTime());
  }else if (value && "age" in value){//타입으로 가드를 하고 싶을때는 in을 사용한다 이때 value에 null이 올수도 있기때문에 value가 있으면의 의미로 앞단에 value&&을 써준다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);//value.name이 확실하게  Person 타입으로 좁혀진것을 확인할 수 있다.
  }
}