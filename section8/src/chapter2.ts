/**
 * 맵드 타입
 * 인터페이스에서 사용 불가능
 * 실무에서 사용 많이 함
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]: User[key]; // key : value
};

type Boolean = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]; // 유저 아이디 수정 불가능하게 만듬
};

// 한명의 유저 정보를 불러오는 기능

function fetchUser(): User {
  // 기능
  return {
    id: 1,
    name: "정요찬",
    age: 19,
  };
}

function updateUser(user: User) {
  // ... 수정하는 기능
}
