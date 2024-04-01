let menubar = document.getElementById('menu')
let navbar = document.getElementById('nav')
menubar.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
})


let home = document.querySelectorAll('.offham')
home.forEach(off => {
    off.addEventListener('click', (e) => {
        navbar.classList.add('hidden')
    })
})


let buttonState1 = 0;
let desc = document.getElementById('seem1')
let button = document.getElementById('btnsee1');
button.addEventListener('click', (e) => {
    switch (buttonState1) {
        case 0:
            button.innerHTML = 'See Less'
            buttonState1 = 1;
            break
        case 1:
            button.innerHTML = 'See More'
            buttonState1 = 0
            break
        default:
            button.innerHTML = 'See More'
            buttonState1 = 0;
    }
    desc.classList.toggle('hidden')
})

let buttonState2 = 0;
let desc2 = document.getElementById('seem2')
let button2 = document.getElementById('btnsee2');
button2.addEventListener('click', (e) => {
    switch (buttonState2) {
        case 0:
            button2.innerHTML = 'See Less'
            buttonState2 = 1;
            break
        case 1:
            button2.innerHTML = 'See More'
            buttonState2 = 0
            break
        default:
            button2.innerHTML = 'See More'
            buttonState2 = 0;
    }
    desc2.classList.toggle('hidden')
})

let buttonState3 = 0;
let desc3 = document.getElementById('seem3')
let button3 = document.getElementById('btnsee3');
button3.addEventListener('click', (e) => {
    switch (buttonState3) {
        case 0:
            button3.innerHTML = 'See Less'
            buttonState3 = 1;
            break
        case 1:
            button3.innerHTML = 'See More'
            buttonState3 = 0
            break
        default:
            button3.innerHTML = 'See More'
            buttonState3 = 0;
    }
    desc3.classList.toggle('hidden')
})
let anim=document.getElementsByClassName('text')