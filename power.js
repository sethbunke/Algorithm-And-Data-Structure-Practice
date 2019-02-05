let power = (base, exp) => exp === 0 ? 1 : base * power(base, exp - 1);

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));