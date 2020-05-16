const formatString = function (string) {
  const symbols = string.split('');

  if (symbols.length <= 40) {
    return string;
  } else {
    let deleteSymbols = symbols.splice(0, 40);
    deleteSymbols.push('...');
    let finalString = deleteSymbols.join('');

    return finalString;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
