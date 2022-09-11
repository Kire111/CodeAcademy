// 1 Zadaca Go postaviv kako stoperica so minuti i sekundi .
let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;
document.getElementById('start').addEventListener('click', ()=>{if(int!==null){
clearInterval(int);
}
int = setInterval(mainTime,10);
});
document.getElementById('stop').addEventListener('click', ()=>{
clearInterval(int);
});
document.getElementById('reset').addEventListener('click', ()=>{clearInterval(int);
[milliseconds,seconds,minutes,hours] = [0,0,0];
timerRef.innerHTML = '00 : 00 : 00';
});
function mainTime(){
milliseconds+=10;
if(milliseconds == 1000){
milliseconds = 0;
second++;
if(second == 60){
second = 0;
minute++;
if(minute == 60){
minute = 0;
}
}
}
let m = minute < 10 ? "0" + minute : minute;
let s = second < 10 ? "0" + second : second;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}
// Zadaca 2 Tuka ne mi bese jasno kako da go sredam toa so minutite i sekundite so delay i go napraviv so console.log da ima delay i da zastanuva do 15 .
let timer = 0;
const argument = function (delay, num) {
  setTimeout(() => {
    timing = setInterval(() => {
      console.log(timer++);
      if (timer === num + 1) {
        clearInterval(timing);
        timer = 0;
      }
    }, 1 * 1000);
  }, delay * 1000);
};

const Start = document
  .querySelector("#start")
  .addEventListener("click", function () {
    argument(5, 15);
  });

const Stop = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearInterval(timing);
  });

const Reset = document
  .querySelector("#reset")
  .addEventListener("click", function () {
    clearInterval(timing);
    console.clear();
    timer = 0;
  });
// 3 Zadaca 
function url() {
    window.location.assign("https://www.youtube.com/watch?v=_7rT-ixivWU");
  }
// Mislam deka ova e najednostaven nacin za URL.
  console.log(window.location.href);
  console.log(window.location.protocol);
  console.log(window.location.hostname);
  console.log(window.location.pathname);
  console.log(window.location.search);
  console.log(window.location.hash);