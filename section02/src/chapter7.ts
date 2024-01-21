/* Void */
// 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// 변수로 보면
let a: void;
// a = 1;
// a = null ; //  "strictNullChecks": true 로 하면 담을 수 있음.
a = undefined; //void는 undefined 만 넣을 수 있다.

//🤔void랑 undefined가 같은데 왜 void 타입을 만들었을까?
// return문을 꼭 작성해줘야하기 때문이다. void는 return문 작성이 필요없음.

function func3(): undefined {
  console.log("hello");
  return undefined;
  //또는 
  //return;
}

function func4(): null {
  console.log("hello");
  return null;//꼭 null을 리턴해줘야 오류가 사라짐
}


/* Never */
//존재하지않는 , 불가능한 타입
function func5(): never {
  while(true){} //무한루프를 돌아 반환값이 있는것 자체가 모순인 경우 
}

function func6(): never {
  throw new Error(); //에러가 생겨서 실행이 종료되는 경우 마찬가지로 반환값이 절대 생길수 없는 경우
}

let b: never; //아무 타입도 받을 수 없음
let c: never;
// b = c;  //never끼리도 못받는듯?
// b = undefined;//담을수 없음
// b = null ;//담을수 없음

let anyVar : any;
// b = anyvar; // any 타입도 받을 수 없다. 