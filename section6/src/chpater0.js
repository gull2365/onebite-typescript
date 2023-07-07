/**
 * 클래스
 */

let studentA = {
  name: "정요찬",
  grade: "A++",
  age: 19,
  study() {
    console.log("dmddo");
  },
  introduce() {
    console.log("HI");
  },
};

class Student {
  // 필드 (클래스가 만들어낼 객체의 프로퍼티)
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("정요찬", "A++", 19);
console.log(studentB);
studentB.study();
studentB.introduce();
