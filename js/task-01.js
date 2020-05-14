const logItems = function (array) {
  for (const arrayItem of array) {
    console.log(`${array.indexOf(arrayItem) + 1} - ${arrayItem}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
