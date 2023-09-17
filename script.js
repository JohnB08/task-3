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
function desktopMenu() {
  stickyMenu.style.position = "sticky";
  stickyMenu.style.transform = "translate(40vw,-5.5vh)";
  stickyMenu.style.width = "15vw";
  headingText.style.color = "#fffcf2";
  menuCon.style.borderTopRightRadius = "0";
  menuCon.style.borderTopLeftRadius = "0";
  const curYPos = window.scrollY;
  if (curYPos === scrollY) {
    stickyMenu.style.transform = "translate(0vw, -5vh)";
    menuCon.style.borderRadius = "0.5em";
  }
}
function phoneMenu() {
  stickyMenu.style.width = "100vw";
  stickyMenu.style.position = "fixed";
  stickyMenu.style.transform = "translate(-50vw, -7.5vh)";
  menuCon.style.borderRadius = "0";
  headingText.style.color = "#403d39";
  if (curYPos === scrollY && window.innerWidth > 600) {
    stickyMenu.style.transform = "translate(0vw, -5vh)";
    menuCon.style.borderRadius = "0.5em";
  }
}
//Hopefully this now doesn't require a refresh to make the phone function or fullscreen function to work.
function screenWidth() {
  if (window.innerWidth <= 600) {
    window.addEventListener("scroll", phoneMenu);
    window.removeEventListener("scroll", desktopMenu);
  } else {
    window.addEventListener("scroll", desktopMenu);
    window.removeEventListener("scroll", phoneMenu);
  }
}
screenWidth();
window.addEventListener("resize", screenWidth);
//It doesn't work, but if I rework the entire site it would. I think there's a way in JS to change classes for elements, and then have different CSS for the different classes. I.E making my own mediaquery that works like I want. I'm gonna keep this for now tho, even though it looks bad.
