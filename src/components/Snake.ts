class Snake {
  element: HTMLElement;
  //表示蛇头的元素
  head: HTMLElement;
  //蛇的身体，包括蛇头
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')!;
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 290) {
      //蛇撞墙，抛出异常，游戏结束
      throw new Error("蛇撞墙了");
    }
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      //蛇撞墙，游戏结束
      throw new Error("蛇撞墙了");
    }
    this.head.style.top = value + 'px';
  }

  //蛇增加身体
  addBody() {
    this.element.insertAdjacentElement('beforeend', document.createElement('div'));
  }
}

export default Snake;