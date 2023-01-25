let chartsSpans = document.querySelectorAll(".our-skills .skill h3 span");
let charts = document.querySelectorAll(".our-skills .skill .the-progress span");
let chartsContainer = document.querySelector(".our-skills");
notStarted = false;
addEventListener("scroll", function () {
  if (window.scrollY >= chartsContainer.offsetTop && notStarted === false) {
    charts.forEach((chart) => {
      countfromOneToTarget(chart);
    });
    notStarted = true;
  }
});
let counting = 0;
function countfromOneToTarget(e) {
  let goal = e.dataset.goal;
  let theSpan = chartsSpans[counting];
  e.style.width = goal;
  theSpan.textContent = `${goal}`;
  counting++;
}
let timeDiv = document.querySelectorAll(".time .unit");
let timeSpans = document.querySelectorAll(".time .unit span:first-of-type");
let theDate = new Date("dec 2023 31, 23:59:59").getTime();
setInterval(() => {
  let DateNow = new Date().getTime();
  let diffDate = theDate - DateNow;

  timeSpans[0].textContent = Math.floor(diffDate / 1000 / 60 / 60 / 24);
  timeSpans[1].textContent = Math.floor(
    (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timeSpans[2].textContent = Math.floor(
    (diffDate % (1000 * 60 * 60)) / (1000 * 60)
  );
  timeSpans[3].textContent = Math.floor((diffDate % (1000 * 60)) / 1000);
}, 1000);
if (Number(timeSpans[0].textContent) >= 100)
  timeSpans.forEach((timeSpan) => {
    timeSpan.style.padding = "8px";
  });
//
let statics = document.querySelector(".statics");
let staticsSpans = document.querySelectorAll(".statics span.number");
let isStarted99;
window.addEventListener("scroll", function () {
  if (window.scrollY >= statics.offsetTop - 300) {
    if (isStarted99 == undefined) {
      staticsSpans.forEach((span) => {
        countingFromOneToGoal(span);
      });
      isStarted99 = true;
    }
  }
});
function countingFromOneToGoal(element) {
  let goal = element.dataset.goal;
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(counter);
    }
  }, 500 / goal);
}
