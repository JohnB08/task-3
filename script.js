const checkbox = document.getElementById("toggleSwitch");
let textcontainer = document.getElementById("textwrapper");
let label = document.getElementById("labelbtn");
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
