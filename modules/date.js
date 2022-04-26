import { DateTime } from './luxon.js';

const displayDate = document.querySelector('.date');

const setDateTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  displayDate.textContent = date;
};

setInterval(setDateTime, 1000);
