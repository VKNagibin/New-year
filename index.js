"use strict";

const render = () => {
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');

    const dayTime = new Date().getHours();
    const date = new Date().getDay();

    const dayTimeFunc = (hour) => {
        if (hour >= 0 && hour <= 3) {
            return 'Доброй ночи';
        } else if (hour >= 4 && hour <= 11) {
            return 'Доброе утро';
        } else if (hour >= 12 && hour <= 17) {
            return 'Добрый день';
        } else if (hour >= 18 && hour <= 23) {
            return 'Добрый вечер';
        }
    }

    const dateFunc = (day) => {
        let arr = ['Воскресенье', 'Понедельник', 'Вторник',
                   'Среда', 'Четверг', 'Пятница', 'Суббота' ];
        return `Сегодня: ${arr[day]}`;
    }

    const newYear = () => {
        const yearDate = Date.parse('01 january 2022');
        const dateNow = Date.now();
        return Math.round((yearDate - dateNow) / 1000 / 60 / 60 / 24);
    }

    one.innerText = dayTimeFunc(dayTime);
    two.innerText = dateFunc(date);
    three.innerText = `Текущее время: ${new Date().toLocaleTimeString('en')}`;
    four.innerText = `До нового года осталось ${newYear()} дней`;
    setInterval( () => {
        three.innerText = `Текущее время: ${new Date().toLocaleTimeString('en')}`;
    }, 1000);

}

render();