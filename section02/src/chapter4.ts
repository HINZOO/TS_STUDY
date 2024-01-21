/* 타입별칭 */
//양이 많은 객체의 타입을 계속해서 정의하기 힘들때 
//🤔 주의 : 동일한 스코프에 중복된 이름을 사용할 수 없다. 함수안에서는 사용가능.
//           type은 마찬가지로 컴파일 과정에서 제거됨.
type User = {
  id:number; 
  name:string;
  nickName:string;
  birth:string;
  bio:string;
  location:string;
}

let user: User ={
  id: 1,
  name:"HINZOO",
  nickName: "우얽",
  birth:"2000.01.10",
  bio : "안녕",
  location: "인천",
};

let user2: User = {
  id: 2,
  name:"장흥신",
  nickName: "장대도",
  birth:"2003.11.20",
  bio : "안녕,나다",
  location: "서울",
}

/* 인덱스 시그니처 */
// key와 value의 타입을 규칙을 기준으로 객체의 타입을 정의할수있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes : CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key:string]: number;
  Korea: number; //빈 객체를 안만드는 법
  // Korea: string; //🚫 타입이 일치하지 않을 경우 적용할수없다.
}

let countryNumberCodes : CountryNumberCodes = {
  Korea : 500,
};



