/**
 * keyof 연산자
 */

type Person = typeof person;

// interface Person {
//   name: string;
//   age: number;
// }

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof는 타입에만 적용 가능
  return person[key];
}

const person = {
  name: "정요찬",
  age: 19,
};

getPropertyKey(person, "name");
