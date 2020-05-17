let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  if (Number.isNaN(input)){
    alert('Вы ввели не число, попробуйте снова!');
    continue;
  }
  numbers.push(input);

  if (numbers.length === 0) {
    alert('Было введено не число, попробуйте еще раз');
  }
}

for (let number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
