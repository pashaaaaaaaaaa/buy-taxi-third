let currentDay = new Date().getFullYear();
let nextDay = new Date(`May 10 ${currentDay + 1} 00:00:00`);


function updateTiming(){
    let currentTime =  new Date();
    let difference = nextDay - currentTime;
    
    let daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);//days
    let hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;//hours
    let minutesLeft = Math.floor(difference / 1000 / 60 ) % 60;//minutes
    let secondsLeft = Math.floor(difference / 1000) % 60;//seconds
    
    
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    
    // days.innerText = daysLeft;
    
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    
}
setInterval(updateTiming, 1000);
let openBlock = document.querySelectorAll('.eq__elps')
let afterBlock = document.querySelector('.eq__after')
openBlock.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')
        if(item.classList.contains('active')){
            afterBlock.style.display = "flex"
         }else{
            afterBlock.style.display = 'none';
         }
    })
})

let btnDown = document.querySelector('.bx')
console.log(btnDown)