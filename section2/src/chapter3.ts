// object

//user.id: 점표기법으로 객체의 프로퍼티에 접근하면 오류가 생김
// object는 객체다 라는 정보외에 아무것도 없음

// 객체 리터럴 타입으로 정의해줘야 함
// 객체의 구조를 기반으로 타입 정의함 -> 구조적 타입 시스템(프로퍼티를 기준으로 타입 지정, property based TS)
// 구조적 타입 시스템의 반대 C,JAVA 같이 이름을 기반으로 타입 지정하는 것은 명목적 타입 시스템
let user: {
  id?: number; // 선택자 프로퍼티는 ? 붙이기  선택적 프로퍼티(optional property)
  name: string;
} = {
  id: 1,
  name: "정요찬",
};

let config: {
  readonly apiKey: string; // readonly 읽기 전용 프로퍼티
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
