'use strict '
const paragraphs = document.querySelectorAll('.paragraph')
const header = document.querySelectorAll('.header')
const img = document.querySelectorAll('.img')
// OPEN/CLOSE
header.forEach((touch) => touch.addEventListener('click', function(e){
    const num = touch.dataset.num;
    if(e.target.classList.contains('touch')){
    paragraphs.forEach(function(el,i){
       if(i === +num ){
        el.classList.toggle('hidden')
       }
    })
}
}))
// zmiana obrazka

header.forEach((touch) => touch.addEventListener('click', function(e){
     const num = touch.dataset.num;
    paragraphs.forEach(function(el,i){
                if( i=== +num && !el.classList.contains('hidden')){
                    img.forEach(function(img,i){
                        if(i===+num ){
                            img.src ='images/icon-minus.svg'
                    }})
                }
                if(i=== +num && el.classList.contains('hidden')){
                    img.forEach(function(img,i){
                        if(i===+num ){
                            img.src ='images/icon-plus.svg'
                    }})
                }
    })
}))