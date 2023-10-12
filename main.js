// console.log("Hello World");
// alert("bang udah bang");
// const anu = prompt("Pinjam dulu seratus");
// console.log(anu);

// var Promnet = "Coding is Easy";
// console.log(Promnet);
// var Promnet = "Coding not Easy";
// console.log(Promnet);
// var Promnet = "nothing is possible";
// console.log(Promnet);

// let Promnet = "Coding is Fun";
// console.log(Promnet);
// let Promnet = "Coding not Fun";
// console.log(Promnet);


// const Promnet = "Coding is Fun";
// console.log(Promnet);
// const Promnet = "Coding is not Fun";
// console.log(Promnet);

// let totalPoint = prompt("Masukkan poin anda");
// if (totalPoint >= 100) {
  // document.write("Congratulation bruh");
// } else {
  // document.write("Keep Trying Bruh :(");
// }

let [x, y] = [6, 3];
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);

// console.log(`a) (x < 10 && y > 1) => ${x < 10 && y > 1}`);
// console.log(`b) (x < 10 && y < 1) => ${x < 10 && y < 1}`);
// console.log(`c) (x == 5 || y == 5) => ${x == 5 || y == 5}`);
// console.log(`d) (x == 6 || y == 5) => ${x == 6 || y == 6}`);
// console.log(`e) !(x == y) => ${!(x == y)}`);

const body = document.querySelector('body');

body.innerHTML += `x = ${x}, y = ${y}<br/>`;
body.innerHTML += `a) (x < 10 && y > 1) => ${x < 10 && y > 1}<br/>`;
body.innerHTML += `b) (x < 10 && y < 1) => ${x < 10 && y < 1}<br/>`;
body.innerHTML += `c) (x == 5 || y == 5) => ${x == 5 || y == 5}<br/>`;
body.innerHTML += `d) (x == 6 || y == 5) => ${x == 6 || y == 6}<br/>`;
body.innerHTML += `e) !(x == y) => ${!(x == y)}<br/>`;
