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
    //修改X值，实在修改水平坐标，蛇在左右移动，
    //蛇在向左移动的时候，不能调头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      //如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        //如果新值 value 大于 X,说明蛇向左走，此时发生调头，应该使蛇继续向左走
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    //移动身体
    this.moveBody();
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      //蛇撞墙，游戏结束
      throw new Error("蛇撞墙了");
    }
    //移动身体
    this.moveBody();
    this.head.style.top = value + 'px';
  }

  //蛇增加身体
  addBody() {
    this.element.insertAdjacentElement('beforeend', document.createElement('div'));
  }

  //添加一个蛇身体移动的方法
  moveBody() {
    //将后边身体设置为前边身体的问题
    //遍历获取所有身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //将获取的值设置到当前的身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}

export default Snake;