let con = document.querySelector(".container img");
let love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.color = "red";
  setTimeout(function () {
    love.style.opacity = "0";
  }, 5000);
  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(1)";
  }, 3000);
});
