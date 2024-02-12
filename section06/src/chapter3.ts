/**
 * 인터페이스와 클래스
 */

interface CharacterInterface{
  name: string;
  moveSpeed: number;
  move():void;
}

class Character implements CharacterInterface{
  //인터페이스는 무조건 public 필드 접근제어자만 가능하다.
  //만약 private가 필요하다면 인터페이스가아닌 현재 클래스에 정의해줘야함.
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra:string
     ) { }
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`)
  }
}