/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 조건문 안에서는 자동으로 타입이 좁혀짐 -> 타입 좁히기(타입 가드)
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof -> value가 Date인지 묻는것
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // && 연산자를 사용해서 value가 존재하는걸 각인 시킨 후 age 프로퍼티만을 가진 Person을 조건으로 인식 시킴
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
