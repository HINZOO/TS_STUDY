/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;
num1 = num2 ; //업캐스팅(가능)
// num2 = num1 ; //다운캐스팅(불가능)


/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

  type Animal = {
    name: string;
    color: string;
  };
  
  type Dog = {
    name: string;
    color: string;
    breed: string;
  };

  let animal: Animal = {
    name: "기린",
    color: "yellow",
  }

  let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
  }

  animal = dog;//업캐스팅
  // dog = animal; //다운캐스팅
  // animal은 dog에 담을 수 있으나 dog 는 animal에 담을 수 없다. 즉 animal이 슈퍼타입임을 알 수 있다.
  //🍊 기준은 프로퍼티 기준이다. 추가프로퍼티가없는 조건이 더 적은 타입이 슈퍼타입이 된다 
  //공통프로퍼티를 모두 포함하는 쪽이 슈퍼타입이 된다.



  type Book = {//슈퍼타입
    name: string;
    price: number;
  };
  type ProgrammingBook = {//서브타입
    name: string;
    price: number;
    skill: string;
  };

  let book:Book;
  let programmingBook:ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    skill: "react js",
  };
  
  book = programmingBook;
  // programmingBook = book;

  /**
   * 초과 프로터퍼티 검사
   * 객체 리터럴을 사용할때 초과프로퍼티를 검사하는 것임.
   * 
   */

  // book = programmingBook; 이 문장과 아래문장은 같은 말이다. 단지 리터럴로 하면 초과된 프로퍼티에 대해 오류메세지를 넣어줌.
  let book2: Book ={
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    // skill: "react js", //초과프로퍼티검사를 막으려면 주석처리하거나 위처럼 작성한다.
  }
  
  function func(book:Book){};
  func({
    name: "한 입 크기로 잘라먹는 리엑트",
    price: 33000,
    // skill: "react js",
  })
  func(programmingBook); //이런식으로 변수로 넣어주는것이 초과프로퍼티검사를 피할 수 있다.


  

