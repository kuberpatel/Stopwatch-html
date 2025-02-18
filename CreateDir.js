<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
    }

    body{
        width: 100%;
        height: 100vh;
        background-color: aquamarine;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .container{
        padding: 2rem;
        max-width: 300px;
        text-align: center;
        position: relative;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.6);
    }

    .time{
        padding: 1 rem 0;
        font-size: 2rem;
    }

    h1,
    p{
        color: whitesmoke;
    }

    button{
        padding: 0.4rem 1 rem;
        margin: 0 0.2rem;
        border-radius: 10px;
        border: 1px solid whitesmoke;
        width: 80px;
        height: 30px;
        cursor: pointer;
    }

    button:hover{
      background-color: aquamarine;
    }
</style>
<body>
    <div class="container">
        <h1>Stopwatch</h1>
        <br>
        <p class="time">
            <span id="minutes">00</span>:<span id="seconds">00</span>:<span id="hours">00</span>
        </p>
        <br>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
    </div> 

    <script>
        window.onload = function() {
            let minutes = 0;
            let seconds = 0;
            let hours = 0;
            let appendMinutes = document.getElementById("minutes");
            let appendSeconds = document.getElementById("seconds");
            let appendHours = document.getElementById("hours");

            let startBtn = document.getElementById("start");
            let stopBtn = document.getElementById("stop");
            let resetBtn = document.getElementById("reset");

            let Interval;

            const startTimer = () => {
                seconds++;

                if (seconds > 59) {
                    minutes++;
                    seconds = 0;
                }
                if (minutes > 59) {
                    hours++;
                    minutes = 0;
                }

                appendSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
                appendMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
                appendHours.innerHTML = hours < 10 ? '0' + hours : hours;
            };

            startBtn.onclick = () => {
                clearInterval(Interval);
                Interval = setInterval(startTimer, 1000);
            };

            stopBtn.onclick = () => {
                clearInterval(Interval);
            };

            resetBtn.onclick = () => {
                clearInterval(Interval);
                hours = 0;
                minutes = 0;
                seconds = 0;
                appendHours.innerHTML = '00';
                appendMinutes.innerHTML = '00';
                appendSeconds.innerHTML = '00';
            };
        };
    </script>
</body>
</html>
