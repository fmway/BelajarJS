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

// let [x, y] = [6, 3];
// console.log(`x = ${x}`);
// console.log(`y = ${y}`);

// console.log(`a) (x < 10 && y > 1) => ${x < 10 && y > 1}`);
// console.log(`b) (x < 10 && y < 1) => ${x < 10 && y < 1}`);
// console.log(`c) (x == 5 || y == 5) => ${x == 5 || y == 5}`);
// console.log(`d) (x == 6 || y == 5) => ${x == 6 || y == 6}`);
// console.log(`e) !(x == y) => ${!(x == y)}`);

// const body = document.querySelector('body');
//
// body.innerHTML += `x = ${x}, y = ${y}<br/>`;
// body.innerHTML += `a) (x < 10 && y > 1) => ${x < 10 && y > 1}<br/>`;
// body.innerHTML += `b) (x < 10 && y < 1) => ${x < 10 && y < 1}<br/>`;
// body.innerHTML += `c) (x == 5 || y == 5) => ${x == 5 || y == 5}<br/>`;
// body.innerHTML += `d) (x == 6 || y == 5) => ${x == 6 || y == 6}<br/>`;
// body.innerHTML += `e) !(x == y) => ${!(x == y)}<br/>`;

// const value = document.querySelector('p #hasil');
// const button = document.querySelector('button');
// const input = document.querySelector('input#input_form')
//
// button.addEventListener('click', function(event) {
//   let isi = input.value;
//   console.log(isi);
//   value.innerText = isi;
//   event.preventDefault();
// })


/*  */
const todo = document.querySelector("#list-todo");
const input = document.querySelector("#input");

// It will run when the user types something in the input
input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") addTodo(); // if type enter run addTodo
});

// Add todo is for a function that will generate html code from input to the todo-list div
const addTodo = () => {
  if (input.value == "") return; // if value in input is empty, do nothing
  const { value } = input;
  const id = "" + (new Date).getTime(); // id is just for fun, because i like it

  // El is the super container
  const el = document.createElement("div");
  todo.className = "rounded-lg border border-violet-300";
  el.className = "text-xl border border-violet-200 p-2 flex flex-row justify-between items-center";

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.className = "basis-1/12";
  checkbox.type = "checkbox";

  // when checkbox changes to checked, the next element will be strikethrough / line through
  checkbox.addEventListener("change", (e) => {
    const text = e.target.nextElementSibling;
    text.classList.toggle('line-through')
  });
  checkbox.value = value;
  checkbox.id = id;

  // Label.
  const label = document.createElement("label");
  label.className = "basis-10/12";
  label.htmlFor = id;
  label.innerText = value;

  // button have two action
  const buttons = document.createElement("div");
  buttons.className = "basis-2/12 md:basis-1/12 flex justify-around md:justify-between items-center";

  // first is for delete
  const delbut = document.createElement("button");
  delbut.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hover:fill-red-500 active:fill-red-800" viewBox="0 0 24 24">
      <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" />
    </svg>`;

  // when delete button is clicked, it will be remove the super div / super container
  delbut.addEventListener("click", (e) => {
    // there are several possible elements to click
    let parent = e.target.parentElement.parentElement; // maybe button is clicked
    if (e.target.tagName == "path") { // or the path is clicked
      parent = parent.parentElement.parentElement;
    } else if (e.target.tagName == "svg") { // or the svg is clicked
      parent = parent.parentElement;
    }
    const ancestor = parent.parentElement; // ancestor is the same as list-todo, you can remove this
    parent.remove();
    if (!ancestor.hasChildNodes()) { // this will remove the border and padding rather than changing it to display none
      ancestor.className = "";
    }
  });

  // drag button
  const dragbut = document.createElement("button");
  dragbut.className = "drag";
  dragbut.innerHTML = `
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
  `;

  buttons.appendChild(delbut);
  buttons.appendChild(dragbut);

  el.appendChild(checkbox);
  el.appendChild(label);
  el.appendChild(buttons);

  todo.appendChild(el);

  input.value = "";
  
  // FInallly, for dragging, i use sortable js to handle it
  new Sortable(todo, {
      handle: '.drag',
      animation: 150
  });
};
