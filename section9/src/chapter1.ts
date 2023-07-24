/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // 두개가 분리되어 들어감

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T; // 타입변수 T가 타입 변수 U의 서브 타입이라면 결과는 never 아니면 T

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never ;

type B = Extract<number | string | boolean, string>;
