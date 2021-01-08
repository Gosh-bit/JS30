const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function secondsToDegrees(time) {
    const seconds = time.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    return secondsDegrees
}

function setSeconds(secondsInDegrees) {
    return secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;
}

function minutesToDegrees(time) {
    const minutes = time.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    return minutesDegrees
}

function setMinutes(minutesInDegrees) {
    return minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`
}

function hoursToDegrees(time) {
    const hours = time.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    return hoursDegrees
}

function setHours(hoursInDegrees) {
    return hourHand.style.transform = `rotate(${hoursInDegrees}deg)`

}

let time = setTimeout(function setDate() {

    const now = new Date();

    setSeconds(secondsToDegrees(now));
    setMinutes(minutesToDegrees(now));
    setHours(hoursToDegrees(now));

    time = setTimeout(setDate, 1000)

}, 1000)
