document.body.style.border = "5px solid red";
document.body.style.filter = "invert(100%) hue-rotate(180deg)";

let images = document.getElementsByTagName("img");

for (i = 0; i < images.length; i++) {
  images[i].style.filter = "invert(1) hue-rotate(180deg)";
}
