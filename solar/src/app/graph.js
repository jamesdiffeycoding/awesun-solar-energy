const verticalstrips = document.querySelectorAll(".verticalstrip");
const message = document.querySelector(".message");
verticalstrips.forEach(verticalstrip => {
  verticalstrip.addEventListener("mouseover", () => {
    message.style.display = "inline";
  });
});
verticalstrips.forEach(verticalstrip => {
  verticalstrip.addEventListener("mouseout", () => {
    message.style.display = "none";
  });
});