// data types --> string, number, boolean, undefined, null, BigInt, symbol
// var uname ='Alice';
// var another = uname.toUpperCase()
// console.log(typeof uname);  // operator
// console.log(uname);
// console.log(window.uname);
// uname=12;

// uname = undefined;
// console.log(typeof(uname)); // function or method

// var countries = ['Greece', 'Germany', 'Italy'];

// var car = {
//   brand: 'audi',
//   color: 'red',
//   accessories: ['nav', 'leather', 'sunroof'],
//   info() { console.log(`Brand: ${this.brand}, Color: ${this.color}` )}
// }

// console.log(car.brand, car.color);
// car.info();

// ----------- ES 6 (2015) --------------
// var - hoisting

// console.log('--> ' + game);

// if (true){
//   var game = 23;
// }

// console.log('--> ' + game);

// ----------- ES 6 (2015) --------------
// let, const

// console.log('--> ' + game);

// if (true){
//   console.log('--> ' + game);
//   let game = 23;
//   console.log('--> ' + game);
// }

// console.log('--> ' + game);

const countries = ['Greece', 'Germany', 'Italy'];
countries[0] = 'GREECE';
console.log(countries);
countries[10] = 'Spain';
console.log(countries);
countries = ['Greece', 'Germany', 'Italy'] // error  if const - let to work