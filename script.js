document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElenmtById("gallery");
  const box = document.querySelector(".box");
  const colorButton = document.getElementById("changeColor");
  const toggleButton = document.getElementById("toggleImage");
  
  colorButton.addEventListener("click", () => {
    box.style.backgroundColor =
      box.style.backgroundColor === "blue" ? "red" : "blue";
  });
  
  let toggled = false;
  toggleButton.addEventListener("click", () => {
    if (toggled) {
      gallery.src = "https://i.postimg.cc/YqsjDfVm/ghost.png";
      toggled = false;
    } else {
      gallery.src = "https://i.postimg.cc/SxsZ8XRY/image1.jpg";
      toggled = true;
    }
  });
  
  console.log("Page loaded");
});
