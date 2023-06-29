/**
 * 타입 추론
 */

let a: number = 10;
let b = "hello";
let c = {
  id: 1,
  name: "정요찬",
  profile: {
    nickname: "gullsrc",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 암묵적 any 타입 진화
d = 10;
d.toFixed;

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];

