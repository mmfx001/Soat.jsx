let millisec = 0;
let sec = 0;
let min = 0;
let interval;



let container = document.querySelector('.container')
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let mil = document.querySelector('.mil');
let secon = document.querySelector('.sec');
let mi = document.querySelector('.min');

start.addEventListener('click',()=> {
    clearInterval(interval)


interval = setInterval(()=> {
    millisec++;
    
 mil.textContent = millisec < 10 ? `00${millisec}` : millisec < 100 ? `0${millisec}` : millisec;
if (millisec >= 250) {
    millisec = 0;
    sec++;
    secon.textContent = sec < 10 ? `0${sec}` : sec;
}if (sec >= 59) {
    sec = 0;
    min++;
    mi.textContent = min < 10 ? `0${min}` : min;
        }
    },1)

});


stop.addEventListener('click',()=> {
    clearInterval(interval)
})


reset.addEventListener('click',()=>  {
    clearInterval(interval)
    millisec = 0
    sec = 0
    min = 0
    mil.textContent = '000'
    secon.textContent = '00'
    mi.textContent = '00'
})
