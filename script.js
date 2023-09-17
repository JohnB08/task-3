const checkbox = document.getElementById("toggleSwitch");
let textcontainer = document.getElementById("textwrapper");
let label = document.getElementById("labelbtn");

//This one is for the checkbox and label to function.
checkbox.addEventListener("click", (event) => {
  if (checkbox.checked === true) {
    textcontainer.style.display = "flex";
    label.style.background = "#EB5E28";
  } else {
    textcontainer.style.display = "none";
    label.style.background = "#CCC5B9";
  }
});

const container = document.getElementById("ham-menu");
let writing = document.getElementById("writingbox");
let photo = document.getElementById("bookbox");
let music = document.getElementById("musicbox");

//This one makes the section show/hide different divs
container.addEventListener("change", (event) => {
  if (container.value == 1) {
    writing.style.display = "block";
    photo.style.display = "none";
    music.style.display = "none";
  }
  if (container.value == 2) {
    writing.style.display = "none";
    photo.style.display = "block";
    music.style.display = "none";
  }
  if (container.value == 3) {
    writing.style.display = "none";
    photo.style.display = "none";
    music.style.display = "block";
  }
});
const stickyMenu = document.getElementById("stickymenu");
const scrollY = window.scrollY;
const menuCon = document.getElementById("menucon");
const headingText = document.getElementById("headingtext");

//This one moves the section menu to the right as you scroll, on portrait phones it covers the entire width.
function moveMenu() {
  stickyMenu.style.display = "inline-block";
  stickyMenu.style.transform = "translate(40vw,-5.5vh)";
  menuCon.style.borderTopRightRadius = "0";
  menuCon.style.borderTopLeftRadius = "0";
  const curYPos = window.scrollY;
  if (curYPos === scrollY) {
    stickyMenu.style.transform = "translate(0vw, -5vh)";
    menuCon.style.borderTopRightRadius = "0.5em";
    menuCon.style.borderTopLeftRadius = "0.5em";
  }
}
function menublock() {
  stickyMenu.style.width = "100vw";
  stickyMenu.style.position = "fixed";
  stickyMenu.style.transform = "translate(-50vw, -7.5vh)";
  menuCon.style.borderRadius = "0";
  headingText.style.color = "#403d39";
}
if (window.innerWidth <= 800) {
  window.addEventListener("scroll", menublock);
} else if (window.innerWidth > 800) {
  window.addEventListener("scroll", moveMenu);
}
