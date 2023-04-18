// let a = 10;

// alert(++a);
// alert(++a);
var visualWrap = document.querySelector("#planVisual");
var visualItems = visualWrap.querySelectorAll(".plan-visual-item");
var activeIndex = 0;
var max = visualItems.length;
function planVisualMot() {
  if (max === activeIndex) {
    activeIndex = 0;
    visualItems.forEach(function (item) {
      item.classList.remove("active");
    });
  } else {
    visualItems[activeIndex].classList.add("active");
    activeIndex++;
  }
}
window.setInterval(function () {
  planVisualMot();
}, 600);
