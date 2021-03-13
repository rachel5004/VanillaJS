// You're gonna need this
function getTime() {
  const date = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const timeleft = xmasDay - date;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(timeleft / day);
  const hours = Math.floor((timeleft % day) / hour);
  const minutes = Math.floor((timeleft % hour) / minute);
  const seconds = Math.floor((timeleft % minute) / second);

  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }h ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
