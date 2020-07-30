let zone = document.querySelector('.zone')
let timeZone = [
  { place: 'NEW YORK', timeZone: 'America/New_York' },
  { place: 'LONDON', timeZone: 'Europe/London' },
  { place: 'BANGKOK', timeZone: 'Asia/Bangkok' },
  { place: 'TAIWAN', timeZone: 'Asia/Taipei' },
  { place: 'SYDNEY', timeZone: 'Australia/Sydney' }]

getTime() //初始畫面不用等一秒

function getTime() {
  let str = '';
  timeZone.forEach(item => {
    str +=
      `<li>
      <div>
        <h2>${item.place}</h2>
        <h4>${new Date().toLocaleString('en-US', { timeZone: `${item.timeZone}`, year: 'numeric', month: 'short', day: 'numeric' })}</h4>
      </div>         
      <h3>${new Date().toLocaleString('en-US', { timeZone: `${item.timeZone}`, hour: 'numeric', minute: 'numeric', hour12: false })}</h3>          
    </li>`
  });
  zone.innerHTML = str
}

setInterval("getTime()", 1000); //記得加雙引號才會重複執行

