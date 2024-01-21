/* enum 타입*/
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { 
  //숫자를 제거하더라도 자동으로 0번부터 순차대로 번호가 할당된다.
  //10번부터 시작하고 싶다면 제일 ADMIN=10만 써줘도 순차대로 1씩증가.
  //중간인 USER에  10을 할당하면 ADMIN =0, USER =10 , GUEST = 11
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language{
  korea = "ko",
  english = "en",
}
//🍊 enum은 컴파일 결과 사라지지 않는다. 자바스크립트의 객체로 변환된다.

const user1 = {
  name: "이아무개",
  role: Role.ADMIN, //관리자 ->  role : 0 이 저장됨.
  // role: 0, //관리자
  language: Language.korea,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 회원
  // role: 1, // 회원
  language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
  // role: 2, // 게스트
  language: Language.english,
};

console.log(user1,user2,user3);
//{ name: '이아무개', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }