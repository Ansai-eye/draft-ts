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
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    this.head.style.top = value + 'px';
  }

  //蛇增加身体
  addBody() {
    this.element.insertAdjacentElement('beforeend', '<div></div>');
  }
}