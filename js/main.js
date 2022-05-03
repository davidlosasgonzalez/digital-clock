'use strict';

import { changeBackground, formatDate, formatTime } from './helpers.js';

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

setInterval(() => {
    const now = new Date();

    h1.textContent = formatTime(now);
    h2.textContent = formatDate(now);

    changeBackground(now.getHours());
}, 1000);
