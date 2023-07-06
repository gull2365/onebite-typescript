/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 인터페이스는 객체 타입이면 가능 (interface 혹은 type)
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dpgCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: false,
};
