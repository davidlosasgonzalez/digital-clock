'use strict';

const body = document.body;

/**
 *
 * @param {Date} date Date type object.
 * @returns A string with the time formated.
 */
function formatTime(date) {
    return date.getSeconds() % 2 === 0
        ? date.toLocaleTimeString('es-ES')
        : date.toLocaleTimeString('es-ES').replaceAll(':', ' ');
}

/**
 *
 * @param {Date} date Date type object.
 * @returns A string with the date formated.
 */
function formatDate(date) {
    return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

/**
 *
 * @param {Number} hours An integer with the current hour.
 * @returns A string with the name of a class: morning, afternoon or night.
 */
function changeBackground(hours) {
    console.log('Dentro');
    if (hours >= 7 && hours < 13) {
        body.classList.remove('night');
        body.classList.add('morning');
    } else if (hours >= 13 && hours < 21) {
        body.classList.remove('morning');
        body.classList.add('afternoon');
    } else {
        body.classList.remove('afternoon');
        body.classList.add('night');
    }
}

export { formatTime, formatDate, changeBackground };
