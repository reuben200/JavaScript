const christmas = '25 December 2022';

let daysEl = document.getElementById("dys" );
let hoursEl = document.getElementById("hrs" );
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

const countdown = ()=>{
    const xmasDate = new Date(christmas);
    const currentDate = new Date();
    let dateDiff = (xmasDate - currentDate);
    //change ms to secs
    let fractionalTime = dateDiff/1000;
    let calculatedDays = fractionalTime/(3600*24);

    days = Math.floor(calculatedDays);
    hours=Math.floor((calculatedDays - days)*24);
    mins = Math.floor((((calculatedDays - days)*24)-hours)*60);
    secs = Math.floor(fractionalTime)%60;

    secsEl.innerHTML= timeFormat(secs);
    minsEl.innerHTML= timeFormat(mins);
    hoursEl.innerHTML=hours;
    daysEl.innerHTML=days;    
}
//To add zeros to number, when less than 10
let timeFormat = (time)=>{
    return (time<10? (`0${time}`): time)
}

//The countdown proper

    countdown();
    setInterval(countdown, 1000);



