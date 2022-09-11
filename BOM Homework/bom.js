// 1 Zadaca 
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