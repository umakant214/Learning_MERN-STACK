let add = document.querySelector("#Add");
let Stranger = document.querySelector("#Stranger");
let remove = document.querySelector("#Remove");
add.addEventListener("click", function () {
  add.innerText = "Friends";
  add.style.width = "100px";
  Stranger.innerText = "Friends";
  Stranger.style.color = "Green";
  Stranger.style.fontStyle = "bold";
});
remove.addEventListener("click", function () {
  Stranger.innerHTML = "Stranger";
  Stranger.style.color = "red";
  add.innerHTML = "Add Friend";
});
