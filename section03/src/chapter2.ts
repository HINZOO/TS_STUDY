/**
 * 🍊 Unknown 타입
 */

function unknownExam(){
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //🤔 업캐스팅은 되지만 다운캐스팅은 되지않음
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar; 
  
}


/**
 * 🍊 Never 타입
 */
function neverExam(){
  function neverFunc(): never {
    while(true){}
  }
  //never를 반환하는 경우 업캐스팅이 가능하기때문에 아무곳에서나 값을 넣을 수 있음.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //🤔 가장 최하계층에 있는 never타입은 다운캐스팅이 되지않기 때문에 아무타입도 들어올수 없다.
  // let never1: never = 0;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * 🍊 Void 타입
 */

function voidExam(){
  function voidFunc(): void{
    console.log("hi");
    return undefined; //업캐스팅이 가능하기때문에 반환도 가능하다.
  }

  let voidVar : void = undefined; //upcasting
}

/**
 * 🍊 any 타입 => 치트키 같은 느낌이라 never를 제외한 업,다운이 모두 가능.
 */

function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; //업캐스팅
  undefinedVar = anyVar; //다운캐스팅
  // neverVar = anyVar; //🤔 never타입까지는 다운캐스팅 할 수 없다.
}