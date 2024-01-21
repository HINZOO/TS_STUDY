let user: { //객체를 구조기준으로 정의 => 구조적 타입 시스템 => property based Type System (<->명목적타입시스템)
  id?:number; // ? 를 붙이면 있어도 되고 없어도 되는데 있는경우 타입이 다음과 같다는것을 알려주는 속성
              // 선택적 프로퍼티 (Optional property) 라고 부른다.
  name:string;
} ={
  id: 1,
  name:"HINZOO",
};

user = {
  name: "홍길동"
}




let dog: {
  name: string;
  color: string;
} = {
  name: "춘향이",
  color: "brown",
};

console.log(dog.name, dog.color);




let config: {
  readonly apikey: string;
} = {
  apikey: "딱봐도 중요해보이지, 변경되면 안됨.",
};

// config.apikey = "수정을 못하게 하기위해 readonly사용";
