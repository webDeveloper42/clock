let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let clock = document.getElementsByClassName('clock');
let date = new Date();
let getHours = date.getHours();
let getMinutes = date.getMinutes();
let setting = document.getElementsByClassName('timeSetting');

hour.textContent = getHours;
minute.textContent = getMinutes;


if(hour == 0){
    hour = 12;
}
if(hour > 12){
    hour = hour - 12;
    setting.textContent = "PM"
}

