/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  //interface는 무조건 public 접근제어자만 사용가능
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  //imprements -> 구현하다
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
