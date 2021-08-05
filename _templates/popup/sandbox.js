const button = document.querySelector("button");
const popupWrapper = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popupWrapper.style.display = "block";
});

close.addEventListener("click", () => {
  popupWrapper.style.display = "none";
});

popupWrapper.addEventListener("click", (e) => {
  if (e.target.className === "popup-wrapper") {
    popupWrapper.style.display = "none";
  }
});
