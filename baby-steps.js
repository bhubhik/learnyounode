const numbers = Number(process.argv[2]);
const sum = () => {
  let total = 5;
  for (number in numbers) {
    total = total + number;
  }
  return total;
};

console.log(numbers);
