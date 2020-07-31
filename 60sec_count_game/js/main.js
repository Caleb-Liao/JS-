let time = document.querySelector('.time');
let firstNumber = document.querySelector('.number_first');
let secondNumber = document.querySelector('.number_second');
let operator = document.querySelector('.operator');
let answer = document.querySelector('.answer');
let score = document.querySelector('.score');
let totalScore = document.querySelector('.total_score')
let count = 60;
let point = 0;
let number1 = null;
let number2 = null;
let operatorList = ['+', '−', '×', '÷'];
let equation = [];
answer.addEventListener('keydown', changeQuestion);

//切換頁面相關
let index = document.querySelector('.index')
let main = document.querySelector('.main')
let restart = document.querySelector('.restart')
let toMain = document.querySelector('.toMain')
let toIndex = document.querySelector('.toIndex')
//切換至main頁面，並初始main頁面的資料
toMain.addEventListener('click', function () {
  index.style.display = 'none';
  main.style.display = 'block';
  equation = [];
  countDown();
  getFirstNum();
  getOperator();
  getSecondNum();
  count = 60;
  point = 0;
  score.innerHTML = '000'
})
//切換至首頁
toIndex.addEventListener('click', function () {
  restart.style.display = 'none';
  index.style.display = 'block'
})

function changeQuestion(e) {
  if (e.keyCode === 13) {
    sumPoint();
    getFirstNum();
    getOperator();
    getSecondNum();
  }
}

function sumPoint() {
  const total = Math.round(eval(equation.join('')) * 10) / 10; //四捨五入到第一位數的作法
  if (parseFloat(answer.value) === total) {
    point += 1
    score.innerHTML = `00${point}`
  };
  answer.value = '';
  equation = [];
}

//隨機取得第一個數並存入陣列
function getFirstNum() {
  number1 = Math.floor(Math.random() * 100);
  firstNumber.innerHTML = number1;
  equation.push(number1);
}

//隨機取得運算子並存入陣列
function getOperator() {
  const index = Math.floor(Math.random() * operatorList.length) //隨機從陣列取值的作法
  operator.innerHTML = operatorList[index];
  switch (operatorList[index]) {
    case '+':
      equation.push('+');
      break;
    case '−':
      equation.push('-');
      break;
    case '×':
      equation.push('*');
      break;
    case '÷':
      equation.push('/');
      break;
    default:
      break;
  };
}

//隨機取得第二個數並存入陣列
function getSecondNum() {
  number2 = Math.floor(Math.random() * 100);
  if (number2 == 0) number2 = 1; //避免第二個數字為0
  secondNumber.innerHTML = number2;
  equation.push(number2);
}

function countDown() {
  const timer = setInterval(() => {
    count -= 1;
    time.innerHTML = `00:${count}`;
    if (count == 0) {
      //暫停倒數，並切換至最末頁
      clearInterval(timer);
      main.style.display = 'none';
      restart.style.display = 'block';
      totalScore.innerHTML = point;
    }
  }, 1000);
}