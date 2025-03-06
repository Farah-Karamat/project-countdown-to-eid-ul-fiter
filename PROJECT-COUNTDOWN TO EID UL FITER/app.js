var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

//==============================================================================

var countDown = (targetDate) => {
setInterval(() => refreshCountDown(targetDate), 1000);
}
var targetDate = new Date("April 01 2025 19:00");
countDown(targetDate);

//==============================================================================

var refreshCountDown = (dueDate) => {
var currentTime = new Date();
var timeDifference = dueDate - currentTime;

//calculate days, hours, minutes and seconds from timedifference
var calculateSeconds = Math.floor(timeDifference/1000) % 60;
var calculateMinutes = Math.floor(timeDifference/1000/60) % 60;
var calculateHours = Math.floor(timeDifference/1000/60/60) % 60;
var calculateDays = Math.floor(timeDifference/1000/60/60/24);
// console.log(calculateDays);
//console.log(timeDifference);
//==============================================================================

seconds.textContent = calculateSeconds;
minutes.textContent = calculateMinutes;
hours.textContent = calculateHours;
days.textContent = calculateDays;
}

//==============================================================================
