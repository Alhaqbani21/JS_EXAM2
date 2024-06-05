document.addEventListener('DOMContentLoaded', async () => {
  let fajirPrayerDisplay = document.getElementById('fajirPrayers');
  let DhuhrPrayerDisplay = document.getElementById('DhuhrPrayers');
  let AsrPrayerDisplay = document.getElementById('AsrPrayers');
  let MaghribPrayerDisplay = document.getElementById('MaghribPrayers');
  let IshaPrayerDisplay = document.getElementById('IshaPrayers');

  let url = `http://api.aladhan.com/v1/calendarByCity/2024/6?city=Riyadh&country=Saudi Arabia&method=2`;
  let res = await fetch(url, { method: 'GET' });
  let data = await res.json();
  let dataArray = data.data;

  let dateEnglishDisplay = document.getElementById('date');
  let dateHijri = document.getElementById('dateHijri');
  let day = document.getElementById('day');
  document.getElementById('changeDate').addEventListener('click', () => {
    dateEnglishDisplay.classList.toggle('hidden');
    dateHijri.classList.toggle('hidden');
  });

  let objectFound = dataArray[4];

  console.log(objectFound);
  dateEnglishDisplay.innerText = objectFound.date.readable;
  dateHijri.innerText = objectFound.date.hijri.date;

  fajirPrayerDisplay.innerText = objectFound.timings.Fajr;
  DhuhrPrayerDisplay.innerText = objectFound.timings.Dhuhr;
  AsrPrayerDisplay.innerText = objectFound.timings.Asr;
  MaghribPrayerDisplay.innerText = objectFound.timings.Maghrib;
  IshaPrayerDisplay.innerText = objectFound.timings.Isha;
  day.innerText = objectFound.date.hijri.weekday.ar;
});
