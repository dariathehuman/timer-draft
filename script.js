"use strict"

const timer = document.querySelector('.timer');
const $days = document.querySelector('.timer__days');
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

const formContainer = document.querySelector('.form-section');
const formButton = document.querySelector('.form__button');
const inputDay = document.querySelector('.form__input--day');
const inputMonth = document.querySelector('.form__input--month');
const inputYear = document.querySelector('.form__input--year');
const inputHours = document.querySelector('.form__input--hours');
const inputMin = document.querySelector('.form__input--min');

let date;
let day;
let month;
let year;
let hours;
let min;

function checkDate() {
    if (localStorage.getItem('timerDate')) {
        date = new Date(localStorage.getItem('timerDate'));
        formContainer.classList.add('hidden');
        timer.classList.remove('hidden');
    }
}

function handleInput(e) {
    const value = e.target.value;
    if (value) {
        switch (e.target.id) {
            case 'day':
                day = value;
                break;
            case 'month':
                month = value - 1;
                break;
            case 'year':
                year = value;
                break;
            case 'hours':
                hours = value;
                break;
            case 'min':
                min = value;
                break;
        }
        checkInputs();
    }
}

function checkInputs() {
    if(day && month && year && hours && min) {
        if (year < 100) year = 20 + year;
        date = new Date(year, month, day, hours, min);
        if (date < Date.now()) {
            date = new Date(year + 1, month, day);
        }
        formButton.removeAttribute('disabled');
        setInterval(countdownTimer, 1000);
    }
}

function countdownTimer() {
    const diff = date - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
}

checkDate();

inputDay.addEventListener('input', handleInput);
inputMonth.addEventListener('input', handleInput);
inputYear.addEventListener('input', handleInput);
inputHours.addEventListener('input', handleInput);
inputMin.addEventListener('input', handleInput);

formButton.addEventListener('click', function (e) {
    e.preventDefault();
    formContainer.classList.add('hidden');
    timer.classList.remove('hidden');
    localStorage.setItem('timerDate', date);
});

setInterval(countdownTimer, 1000);
