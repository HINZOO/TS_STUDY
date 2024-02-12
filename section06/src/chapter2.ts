/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee{
  //필드
  private name: string; 
  protected age: number;
  public position: string;

  //생성자
  constructor(name: string,age: number,position: string){
    this.name = name;
    this.age = age;
    this.position = position;
  }
  
  //메서드
  work(){
    console.log(` ${this.name} 일함`);
  }
}


class ExecutiveOfficer extends Employee{
  //필드
  officeNumber: number;

  //생성자
  constructor(name: string,
              age: number,
              position: string,
              officeNumber: number
            ){
    super(name,age,position);
    this.officeNumber = officeNumber;
  }
  
  //메서드
  func(){
  //  this.name; //private :: 내부외에 모든곳에 접근불가.
   this.age ; //protected:: 외부는 접근불가, 파생클래스내에서는 접근가능.
  }

}

const employee = new Employee("김오너",30,"developer");
// employee.name = "김건반";
// employee.age = 44;
employee.position = "피아니스트";


// 생성자의 변수에 직접 접근제어자를 달아줄수있다.
// 이경우 필드에 접근제어자를 표기할 필요도 없으며
// 생성자 생성시 필드에 자동할당 되기 때문에 필드값을 써줄 필요도 없고 this를 해줄필요도 없다 (모두 자동으로 인식)
class EmployeeACCESS{
  
  //생성자
  constructor(
    private name: string, 
    protected age: number, 
    public position: string
    ){ }
  
  //메서드
  work(){
    console.log(` ${this.name} 일함`);
  }
}
const employee2 = new EmployeeACCESS("김오너2",32,"developer2");
console.log(employee2);

