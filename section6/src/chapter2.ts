/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  private name: string; // 이 클래스 내에서만 사용가능
  protected age: number; // 파생 클래스에서도 사용가능 단 외부 클래스에서는 사용불가
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    // 생성자의 매개변수 앞에 접근 제어자를 다는것도 가능함.
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("working");
  }
}

const employee = new Employee("정요찬", 19, "개발자");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
