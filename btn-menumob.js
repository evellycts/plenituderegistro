let btnMenuMob = document.querySelector('#btn-menu-mobile')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menumomobile = document.querySelector('#menu-mobile')

let body = document.querySelector('body')

btnMenuMob.addEventListener("click",()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menumomobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')
})