/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "정요찬",
  age: 19,
  position: "developer",
  work() {
    console.log("work");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("working");
  }
}

class ExcutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // 생략시 에러 -> 안 쓸거면 왜 상속 했냐 에러 뜸
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("정요찬", 19, "개발자");
console.log(employeeB);
