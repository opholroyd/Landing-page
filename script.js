//DOM Elements
const time = document.getElementById('time'),
    date = document.getElementById('date'),
    gretting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Date Variables
let cmonth = new Array();
    cmonth[0] = "January";
    cmonth[1] = "February";
    cmonth[2] = "March";
    cmonth[3] = "April";
    cmonth[4] = "May";
    cmonth[5] = "June";
    cmonth[6] = "July";
    cmonth[7] = "August";
    cmonth[8] = "September";
    cmonth[9] = "October";
    cmonth[10] = "November";
    cmonth[11] = "December";

let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

// Options
const showAmPm = true;

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Output Time
     // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000)
}

function showDate(){
    let today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        day = today.getDay();
        dayN = today.getDate();

    let d = weekday[day]
    let m = cmonth[month]

    date.innerHTML = `${d} ${dayN} ${m} ${year}`
}

//Set Background
function setBackground() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url(./images/morning.jpg)";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning'
    } else if(hour < 18) {
        document.body.style.backgroundImage = "url(./images/nighttime01.jpg)";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon'
        // Afternoon
    } else {
        document.body.style.backgroundImage = "url(./images/evening01.jpg)";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening'
        // document.body.style.color = "#000000"
        // Evening
    }
} 

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null) {
        focus.textContent = 'Enter Focus';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Run   
showTime();
showDate();
setBackground();
getName();
getFocus();
