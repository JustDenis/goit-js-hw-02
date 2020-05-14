const calculateEngravingPrice = function (message, priceWord) {
  const words = message.split(' ');
  priceWord = words.length * priceWord;

  return priceWord;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
