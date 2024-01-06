//  let imya = prompt('Введите имя');
//  let age = +prompt('Введите сегоднешний год');
//  let year = +prompt('Введите ваш год');
//function info (){
//  let answer = imya + ', Ваш возраст ' + (age - year)
//  return answer
//}
//
//console.log(info());

function random(min, max) {
  return Math.round(Math.random() * (max + 1 - min) + min);
}

let num = +prompt("Введите колличество примеров");

for (let i = 0; i < num; i++) {
  let one = random(1, 10);
  let two = random(1, 10);
  let symbol = random(1, 4);
  let result = 0;
  if (symbol == 1) {
    result = one + two;
    symbol = "+";
  } else if (symbol == 2) {
    result = one - two;
    symbol = "-";
  } else if (symbol == 3) {
    result = one / two;
    symbol = "/";
  } else if (symbol == 4) {
    result = one * two;
    symbol = "*";
  }
  let primer = +prompt(one + symbol + two + " =");
  let word = primer == one + two ? "Ваш ответ верный - " : "Ваш ответ не верный - " + primer + " Правильный ответ - ";
  console.log(word + (one + two));
}
