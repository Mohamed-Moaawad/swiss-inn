let header = document.getElementById('header')

imagesArr = [
    'images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'
]

let i = 0;

function loadimg() {
    if (i == imagesArr.length - 1) {
        i = 0;
    } else {
        i++;
    }

    setTimeout(function () {
        loadimg();
    }, 3000);
    header.style.cssText = `
            background:linear-gradient( rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${imagesArr[i]});
            background-size: cover;
            background-position: center;
            `;
}
loadimg();


//=============== toggle menu ASK ===============

let opne = document.querySelector('.btn-toogel')
let closeIcon = document.getElementById('close-icon')
let ask = document.querySelector('.ask')

opne.addEventListener('click', function(){
    ask.style.right = '0';
})

closeIcon.addEventListener('click', function(){
    ask.style.right = '-340px';
})

//=============== toggle menu bar ===============
let openMenu = document.getElementById('open-menu-nav')
let closeMenu = document.getElementById('close-nav-menu')
let menu = document.querySelector('.menu-nav')

openMenu.onclick = function(){
    menu.style.left = '0'
}
closeMenu.onclick = function(){
    menu.style.left = '-400px'
}



let opneUl = document.querySelectorAll('.open-ul')

opneUl.forEach(( ele) =>{
    ele.onclick = function(){
        this.style.height = '150px'
    }
});


//============ toggle navbar ============
let btnIcon = document.getElementById('icon-d')
let bigNav = document.querySelector('.big-nav')

btnIcon.addEventListener('click', function(){
    if(bigNav.style.top === '-500px'){
        bigNav.style.top = '100%'
    }else{
        bigNav.style.top = '-500px'
    }
})


//============ btn-up ===========

let btnUp = document.getElementById('btn-up')

window.onscroll = function(){
    if(scrollY >= 600){
        btnUp.style.display = 'flex'
    }else{
        btnUp.style.display = 'none'
    }
}

btnUp.addEventListener('click', function(){
    scroll({
        top:0,
        behavior: "smooth"
    })
})