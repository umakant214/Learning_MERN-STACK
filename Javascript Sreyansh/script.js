//piller 1
// let a = document.querySelector("h1");
// console.log(a);
// let b = document.querySelector("p");
// console.log(b);

// //piller 2
// a.innerHTML = "Hii! Hw are today";
// b.innerHTML = "Boss Come here . I ma waiting for you";

// //piller 3
// a.style.color = "red";
// a.style.backgroundColor = "pink";
// a.style.margin = "20px";
// b.style.fontSize = "30px";
// b.style.justifyContent = "center";

// //piller 4
// a.addEventListener("click", function () {
//   a.innerHTML = "Changed";
//   a.style.color = "green";
// });

// b.addEventListener("click", function () {
//   b.style.color = "#000";
//   b.style.backgroundColor = "red";
//   b.innerHTML = "Latest word for you";
// });
let box1 = document.querySelector(".box");
let btn1 = document.querySelector(".btn1");
let flass = 0;
btn1.addEventListener("click", function () {
  if (flass == 0) {
    box1.style.backgroundColor = "yellow";
    flass = 1;
  } else {
    box1.style.backgroundColor = "gray";
    flass = 0;
  }
});
