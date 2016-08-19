
/*SPA*/
// ------home------//

var homeLink = document.getElementById("nav-home");
var leftView = document.getElementById("blue-box");
var addMusic = document.getElementById("textbox");

homeLink.addEventListener("click", function() {
  leftView.classList.add("visible");
  leftView.classList.remove("hidden");
  rightView.classList.remove("hidden");
  rightView.classList.add("visible");
  addMusic.classList.add("hidden");
  addMusic.classList.remove("visible");

});
// ------Add------//

var addLink = document.getElementById("nav-add");
var rightView = document.getElementById("container3");


addLink.addEventListener("click", function() {
  leftView.classList.remove("visible");
  leftView.classList.add("hidden");
  rightView.classList.remove("visible");
  rightView.classList.add("hidden");
  addMusic.classList.remove("hidden");
  addMusic.classList.add("visible");
});




