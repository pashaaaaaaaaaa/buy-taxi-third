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
let afterBlock2 = document.getElementById('eq__after')
openBlock.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active')
        if(item.classList.contains('active')){
            afterBlock.style.display = "flex"
            afterBlock2.style.display = "flex"
         }else{
            afterBlock.style.display = 'none';
            afterBlock2.style.display = 'none';
         }
    })
})

let btnDown = document.querySelector('.sBtn-text')
let options = document.querySelector('.options')

btnDown.addEventListener('click', ()=>{
    let down = document.querySelector('.bx')
    down.classList.toggle('active-btn')
    if(down.classList.contains('active-btn')){
        options.style.display = "flex"
     }else{
        options.style.display = 'none';
     }
})

let closeModal = document.querySelector('.btn__close')
closeModal.addEventListener('click', ()=>{
    options.style.display = 'none'
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
// when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,

        },
        // when window width is >= 480px
        767: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        },
        1400: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        }
// when window width is >= 640px
}
    
  });