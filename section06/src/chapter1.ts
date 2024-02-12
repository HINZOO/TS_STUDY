/**
 * 타입 스크립트의 클래스
 * 타입스크립트의 클래스는 타입으로 활용할 수 있다.
 */

const employee = {
  name: "이개발",
  age: 27,
  position: "developer",
  work(){
    console.log("일함");
  },
}

class Employee{
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string,age: number,position: string){
    this.name = name;
    this.age = age;
    this.position = position;
  }
  
  //메서드
  work(){
    console.log("일함");
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


}

const employeeB = new Employee("양해커",30,"해커");
 console.log(employeeB);

const employeeC: Employee = {
  name:"",
  age:0,
  position:"",
  work(){},
}