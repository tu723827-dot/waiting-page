let time = 60;
let progress = 0;

let countdown = document.getElementById("countdown");
let progressBar = document.getElementById("progress");

let timer = setInterval(() => {
  time--;
  progress += 100 / 60;

  countdown.innerText = "預估恢復時間：" + time + " 秒";
  progressBar.style.width = progress + "%";

  if (time <= 0) {
    clearInterval(timer);
    countdown.innerText = "已恢復！請重新整理 🎉";
  }
}, 1000);

function refreshPage() {
  location.reload();
}