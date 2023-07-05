/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
}


const person: Person = {
  name: "정요찬",
  age: 19,
  sayHi: function () {
    console.log("hi");
  },
};
