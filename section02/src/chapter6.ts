/* Any */

import { unwatchFile } from "fs";

//특정 변수의 타입을 확실히 모를 때  
let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};

// anyVar.toUpperCase(); 
// anyVar.toFixed();
// anyVar.a;

//특정 타입으로 정의된 변수에도 값을 넣을 수 있다.
let num: number = 10;
num = anyVar;

//타입검사를 안하는것과 마찬가지이기때문에 최대한 사용을 자제한다.



/* Unknown */
let unknownVar : unknown ;
unknownVar = "";
unknownVar = 1 ;
unknownVar = () => {} ;
//any타입과 마찬가지로 다 넣을 수 있다.
//🤔 any와의 차이점
  //모든값을 넣을수 있지만 다른 타입에 대입을 할 수 없다.
  //연산 불가, 다른타입의 함수적용도 불가능하다.

  if(typeof unknownVar === "number"){//타입정제 과정
    num = unknownVar ; 
  }
  //이렇게는 가능하다.
