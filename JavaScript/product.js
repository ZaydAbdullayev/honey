// const box = document.querySelectorAll(".#box");
// const boxMedia = document.querySelectorAll("#boxMedia");
// const offsetWidth = box[0].offsetWidth;

// function AuotoSlide(position = 0) {
//   boxMedia.forEach((item, index) => {
//     item.style.transform = `translateX(-${position * offsetWidth}px)`;
//   });
// }

// let position = 0;

// setInterval(() => {
//   position += 1;

//   if (position === boxMedia.length) {
//     position = 0;
//     AuotoSlide(0);
//   } else {
//     AuotoSlide(position);
//   }
// }, 3000);

const slideWindow = document.querySelector(".window");

function Open() {
  slideWindow.classList.add("open_window");
}

function Close() {
  slideWindow.classList.remove("open_window");
}
