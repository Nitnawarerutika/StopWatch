let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
  
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
  
startBtn.addEventListener('click', function () {
    timer = true;
     sound.play();
    stopWatch();
});
  
stopBtn.addEventListener('click', function () {
    timer = false;
     sound.pause();
});
  
resetBtn.addEventListener('click', function () {
    timer = false;
     sound.pause();
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    // document.getElementById('tens').innerHTML = "00";
});
  
function stopWatch() {
    if (timer) {
        count++;
  
        if (count == 100) {
            second++;
            count = 0;
        }
  
        if (second == 60) {
            minute++;
            second = 0;
        }
  
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
  
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
  
        if (hour < 10) {
            hrString = "0" + hrString;
        }
  
        if (minute < 10) {
            minString = "0" + minString;
        }
  
        if (second < 10) {
            secString = "0" + secString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
  
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        // document.getElementById('tens').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}


