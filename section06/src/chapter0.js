/**
 * 클래스
 */
let studentA = {
  name: "홍길동",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부중")
  },
  introduce(){
    console.log("안녕하세요!")
  },
};

//🍊클래스 선언 (일반적으로 변수명을 파스칼 케이스로 정함)
class Student{
  //필드
  name;
  grade;
  age;
  
  //생성자
  constructor(name,grade,age){
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  
  //메서드
  study(){
    console.log("열심히 공부중")
  }
  introduce(){
    console.log(`안녕하세요! ${this.name}입니다.`)
  }
}

class StudentDeveloper extends Student{
  //필드
  favoriteSkill;

  //생성자
  constructor(name,grade,age,favoriteSkill){
    super(name,grade,age);
    this.favoriteSkill = favoriteSkill;
  }
   
  //메서드
    programming(){
    console.log(`${this.favoriteSkill}로 프로그래밍 함`)
  }
}

//클래스를 이용해서 만든 객체 -> 인스턴스
//Student 인스턴스
let studentB = new Student("강감찬","B+",27);
console.log(studentB);
studentB.study();
studentB.introduce();

//StudentDeveloper 인스턴스
const studentDeveloper = new StudentDeveloper("자연인","B+",25,"TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();


