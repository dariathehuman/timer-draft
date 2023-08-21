const timer = document.querySelector('.timer');
const $days = document.querySelector('.timer__days');
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

const form = document.querySelector('.form');
const formContainer = document.querySelector('.form-section');
const formButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');

let date;

formInput.addEventListener('input', function (e) {
    if (e.target.value) {
        const inputDate = new Date(e.target.value);
        const day = inputDate.getDate();
        const month = inputDate.getMonth();
        const year = new Date().getFullYear();
        date = new Date(year, month, day);
        if (date < Date.now()) {
            date = new Date(year + 1, month, day);
        }
        formButton.removeAttribute('disabled');
        setInterval(countdownTimer, 1000);
    }
});

formButton.addEventListener('click', function (e) {
    e.preventDefault();
    formContainer.classList.add('hidden');
    timer.classList.remove('hidden');
});

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
