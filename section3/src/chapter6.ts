/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "정요찬";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown; // 슈퍼 타입인 unknown

// let num3 = 10 as unknown as string; // 교집합이 없는 타입

/**
 * const 단언
 */

let num4 = 10 as const; // const로 선언한것과 같은 효과를 냄

let cat = {
  name: "야옹이",
  color: "Yellow",
} as const;

// cat.name = ""; const 단언을 사용하였기 때문에 수정 불가

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // ?는 선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  author: "정요찬",
};

const len: number = post.author!.length; // ! null이거나 undefined가 아닐거라고 믿게 만듬 즉 Non Null
// 자동으로 ?가 추가되는데 author 값이(null, undefined)이면 에러가 나니 옵셔널 체이닝을 자동으로 추가 해줌
