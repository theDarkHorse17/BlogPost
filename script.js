let star=document.getElementById('star');
        let moon=document.getElementById('moon');
        let mbehind=document.getElementById('mbehind');
        let text=document.getElementById('text');
        let btn=document.getElementById('btn');
        let mfront=document.getElementById('mfront');
        let about=document.getElementById('about');
        let rocket=documnet.getElementById('svg')

        window.addEventListener('scroll',function(){
            let value =window.scrollY;
            star.style.left= value *0.25+ 'px';
            moon.style.top= value *1+ 'px';
            mbehind.style.top= value *0.5+ 'px';
            mfront.style.top= value *0+ 'px';
            text.style.marginRight=value*4+'px';
            svg.style.top=value*4+'px';        })