var img_1 = document.getElementById('img-1');

let ut = 0;
window.addEventListener('scroll',(e)=>{
    let pa = window.scrollY;

    if (pa>ut) {
        console.log('rolando para cima!');
        girarR();
    }else if(pa<ut){
        console.log('rolando para baixo!');
        girarL();
    }

    ut = pa;
});

let valor = 0 

    function girarR() {
        img_1.style.transform = `rotate(${valor}deg)`;
        valor-=5;
        console.log('girarR');
}

    function girarL(){
        img_1.style.transform = `rotate(${valor}deg)`;
        valor+=5;
        console.log('girarL');
    }