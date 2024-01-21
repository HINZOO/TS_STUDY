/* Number */
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "가나다"; //다른타입저장불가
num1.toFixed(); //넘버타입 메소드 적용가능
// num1.toUpperCase(); //string 타입 메소드 사용불가.
/* String */
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1 = 123 ; //다른 타입 적용불가.
str1.toUpperCase(); //string 타입 메소드 적용가능
// str1.toFixed(); // Number타입 메소드 적용불가
/* boolean */
let bool1 = true;
let bool2 = false;
/* null */
let null1 = null;
/* undefined */
let unde1 = undefined;
//🤔만약 임시로 null을 넣어줘야 하는 상황이라면
// let numA: number = null; // 보통 이 경우 ERROR가 뜨지만, tsconfig에 "strictNullChecks": false 로  설정하면 가능. 
/* 리터럴 타입 */
let numA = 10;
let strA = "hello";
export {};
// let boolA : true = false ; //true 외 다른 값은 들어올수 없다.
