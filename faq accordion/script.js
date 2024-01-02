'use strict '
const buttons = document.querySelectorAll('button')
const paragraphs = document.querySelectorAll('.paragraph')
const header = document.querySelectorAll('.header')

buttons.forEach((btn) => btn.addEventListener('click', function(e){
    const num = btn.dataset.num;
    paragraphs.forEach(function(el,i){
       if(i == num){
        el.classList.toggle('hidden')
       }
    })
}))

header.forEach((touch) => touch.addEventListener('click', function(e){
    const num = touch.dataset.num;
    console.log(num);
    paragraphs.forEach(function(el,i){
       if(i === +num){
        el.classList.toggle('hidden')
       }
    })
}))
