const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const currentDate = document.querySelector(".currentDate")
const dateTitle = new Date();
currentDate.innerHTML += dateTitle.toDateString("en-us");

  
function countdown()
{
    const date = new Date(2021,1,22);
    const current = new Date();
    let sec = Math.floor((date - current)/1000);
    let min = Math.floor(sec/60);
    let hr = Math.floor(min/60);
    let day = Math.floor(hr/24);
    
    days.innerHTML = day;
    hours.innerHTML = hr%24;
    minutes.innerHTML = min%60;
    seconds.innerHTML = sec%60;
}
countdown();
setInterval(countdown,1000);

