// 타입 별칭 (type alias)
type User = {
  id: number;
  name: string;
  nickName: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "정요찬",
  nickName: "chan",
  birth: "2005.11.01",
  bio: "안녕하세요",
  location: "파주시",
};

// 인덱스 시그니쳐

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
