'use strict';

// переменная определяеет дедлайн
const deadLine = '2021-05-20 00:00'; //нужно чтоб дата была больше от текущей. И 00:00 убирает лишние часы. Т.е пишем до какого числа акция

// Функция кот будит определять разницу между дедлайном и нашим текущим врмеенем
function getTimeRemaining(endtime) {
    // в переменную t получим между датами в кол-ве милисекунд. Чтоб код был идентичный в и там и там пишем Date.parse 
    const t = Date.parse(endtime) - Date.parse(new Date()); //кол-во милисек
    // Когда мы получили разницу ее нужно превратить в дни, часы, минуты.
    //Получим сколько у нас осталось суток до оканчания даты deadLine
    const days = (t > 0) ? Math.floor(t / (1000 * 60 * 60 * 24)) : 0;  //1000 * 60 - получаем кол=во милисек в 1 мин, *60 - получаем сколько в 1 часе, *24 - получаем сколько в сутках будит милисек
    const hours = (t > 0) ? Math.floor((t / (1000 * 60 * 60) % 24)) : 0; //получим общее кол-во часов кот у нас осталось до нашего таймера
//% возвращает остаток от деления. Общее кол-во часов / на 24 и т.к. используем % мы получим хвостик кот не хватает до полных суиок
//Хвостик будт помещать не в дни а в часы. По такому принципу будим расичтвывать и сотальное, т.к нам нужны миенно хвостики (остатки от числа) а не челове кол-во
    const minutes = (t > 0) ? Math.floor((t / 1000 / 60) % 60) : 0; //получим хвостик кот не должен быть больше чем 60
    const seconds = (t > 0) ? Math.floor((t / 1000) % 60) : 0; 
//будим возвращать обьект
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) { //все числа меньше 10 будут псиаться впереди с 0
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num; //числа больше 10 возвращаем не изменяя
    }
}
// Выводим наш таймер на стр. Нужн главный эл в кот собраны часы и дедлайн кот мы будит в него передавать
function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();  //чтоб не было мигания при загрузки, вызывать нужно выше

    function updateClock() {
        // расчет того времени кот у нас остался на эту секунду
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <= 0) {  //если часы дошли до 0 то останавливаем таймер
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer', deadLine);

