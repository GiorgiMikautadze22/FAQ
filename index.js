let bold = document.getElementById("bold");
let arrow = document.getElementById("arrow");
let hide = document.getElementById("hide");

bold.addEventListener("click", () => {
  if (bold.style.fontWeight === "normal") {
    bold.style.fontWeight = "bold";
  } else {
    bold.style.fontWeight = "normal";
  }

  if (hide.style.display === "none") {
    hide.style.display = "block";
  } else {
    hide.style.display = "none";
  }
  arrow.classList.add("arrow");
  // if ((bold.style.fontWeight = "bold") && (hide.style.display = "block")) {
  //   arrow.classList.add("arrow");
  // } else {
  //   arrow.classList.add("arrow");
  // }
});
