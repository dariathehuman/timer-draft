const timer = document.querySelector('.timer');
const $days = document.querySelector('.timer__days');
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');
const date = new Date(2023, 5, 22, 19, 00);

const countdownTimer = () => {
    const diff = date - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
};

setInterval(countdownTimer, 1000);
