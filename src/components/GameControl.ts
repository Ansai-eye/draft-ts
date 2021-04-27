//引入其他的类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';
import { checkPropertyChange } from '../../node_modules/_@types_json-schema@7.0.7@@types/json-schema/index';
//游戏控制器，控制所有其他的类
class GameControl {
  //定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //创建一个属性来存储蛇的移动方向，也就是按键的方向
  direction: string = '';
  //创建一个属性来记录游戏是否结束
  isLive: boolean = true;
  constructor() {
    this.scorePanel = new ScorePanel;
    this.food = new Food();
    this.snake = new Snake();
    this.init();
  }

  //游戏的初始化方法，调用后游戏即开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    //调用run方法，使蛇移动
    this.run();
  }
  //创建一个键盘按下响应
  keydownHandler(event: KeyboardEvent) {
    //赋值之前检测event.key是否合法（用户是否按了正确的按键）
    this.direction = event.key;
  }

  //创建一个控制蛇移动的方法
  run() {
    //获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    this.checkEat(X, Y);
    //根据按键方向修改 X Y值
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
      default:
        break;
    }

    //修改蛇的坐标
    try {
      this.snake.X = X;
      this.snake.Y = Y;
      this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    } catch (e) {
      //进入catch，说明出了异常，游戏结束，弹出一个提示信息
      alert(e.message);
      this.isLive = false;
    }

  }
  //定义一个方法，用来检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.scorePanel.addScore();
      this.food.change();
      this.snake.addBody();
    }
  }
}

export default GameControl;