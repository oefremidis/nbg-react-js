// -----------------------
// declaration

// function isZero(number){
//   console.log(number === 0); // == === != !==
// }


// -----------------------
// expression

// const isZero = function(number){
//   console.log(number === 0); 
// };

//--------- ES6 (2015) ----
// fat arrow 

// const isZero = number => console.log(number === 0); 

// isZero(0);
// isZero('0')
// console.log(isZero);

// const einaiMiden = isZero;
// console.log(einaiMiden);
// einaiMiden(0);

// ------------------------------
// First class citizens, 
// High order, callbacks

// function foo(x){
//   console.log(x);
// }

// function bar(funct){
//   console.log(funct);
//   funct("Hello World");
// }

// bar(foo)


// function foo(){

//   function bar(){
//     return 1;
//   }

//   return bar;
// }

// console.log(foo);
// console.log(foo())
// const b = foo();
// console.log(b());

// console.log(foo()())


// function - events

// document.addEventListener('click', () => {
//   console.log('done');
// });

// document.addEventListener('click', function(){
//   console.log('done');
// });

// document.addEventListener('click', function f(){
//   console.log('done');
// });


function f(){
  console.log('done');
}

document.addEventListener('click', f);