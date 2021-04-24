//定义表示记分牌的类
class ScorePanel {
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  //设置一个变量来限制等级
  maxLevel: number;
  //设置一个变量表示多少分时升一级
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.maxLevel = maxLevel;
    this.upScore = upScore;
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
  }

  //设置一个加分的方法
  addScore() {
    this.score++;
    this.scoreElement.innerHTML = this.score + '';
    //判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  //设置一个等级提升的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElement.innerHTML = ++this.level + '';
    }
  }
}

// const scorePanel = new ScorePanel();
// scorePanel.addScore();

export default ScorePanel;