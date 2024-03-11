let countDownDate = new Date("Mar 31, 2024 22:00:10").getTime();

let countdownfunction = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ) {
    clearInterval(countdownfunction);
    let hiddenButtons = document.getElementsByClassName("hiddenbutton");
    for (let i = 0; i < hiddenButtons.length; i++) {
      hiddenButtons[i].style.display = "block";
    }
    let countdowns = document.getElementsByClassName("countdown");
    for (let i = 0; i < countdowns.length; i++) {
      countdowns[i].style.display = "none";
    }
  };
}, 1000);

