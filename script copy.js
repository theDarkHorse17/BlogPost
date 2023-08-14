let star=document.getElementById('star');
let moon=document.getElementById('moon');
let mbehind=document.getElementById('mbehind');
let text=document.getElementById('text');
let btn=document.getElementById('btn');
let mfront=document.getElementById('mfront'); 
let header=document.querySelector('header');
let about=document.getElementById('about');

window.addEventListener('scroll',function(){
    let value =window.scrollY;
    star.style.left= value *0.25+ 'px';
    moon.style.top= value *1.05+ 'px';
    mbehind.style.top= value *0.5+ 'px';
    btn.style.marginTop=value*1.5+'px';
    text.style.marginRight=value*4+'px';
    text.style.marginTop=value*1.5+'px';
    header.style.top=value*0.5+'px';
    //about.style.right=value*0.08+'px';
   
})