let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let imgList = Array.from(document.querySelectorAll("img"));
let overlay = document.querySelector(".overlay");
let overlayItem = document.querySelector(".overlay-item");
let currentIndex = 0;
for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    currentIndex = imgList.indexOf(e.target);
    let imgSrc = e.target.getAttribute("src");
    overlay.classList.replace("d-none", "d-flex");
    overlayItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

close.addEventListener("click", function () {
  overlay.classList.replace("d-flex", "d-none");
});

next.addEventListener("click", function () {
  slide(1);
});
prev.addEventListener("click", function () {
  slide(-1);
});

function slide(index) {
  currentIndex = currentIndex + index;
  if (currentIndex == -1) {
    currentIndex = imgList.length - 1;
  }
  if (currentIndex == imgList.length) {
    currentIndex = 0;
  }
  let imgSrc = imgList[currentIndex].getAttribute("src");
  overlayItem.style.backgroundImage = `url(${imgSrc})`;
}
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    overlay.classList.replace("d-flex", "d-none");
  } else if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  }
});
// next.addEventListener("click", nextImg);
// prev.addEventListener("click", prevImg);

// function nextImg() {
//   currentIndex++;
//   if (currentIndex == imgList.length) {
//     currentIndex = 0;
//   }
//   let imgSrc = imgList[currentIndex].getAttribute("src");
//   overlayItem.style.backgroundImage = `url(${imgSrc})`;
// }

// function prevImg() {
//   currentIndex--;
//   if (currentIndex == -1) {
//     currentIndex = imgList.length - 1;
//   }
//   let imgSrc = imgList[currentIndex].getAttribute("src");
//   overlayItem.style.backgroundImage = `url(${imgSrc})`;
// }
