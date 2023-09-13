function showtext() {
  var checkbox = document.getElementById("toggleSwitch");
  let textcontainer = document.getElementById("textwrapper");
  let label = document.getElementById("labelbtn");
  if (checkbox.checked === true) {
    textcontainer.style.display = "block";
    label.style.background = "#EB5E28";
  } else {
    textcontainer.style.display = "none";
    label.style.background = "#CCC5B9";
  }
}
