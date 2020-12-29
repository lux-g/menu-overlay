const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');

btn.addEventListener('click', ()=> {
    overlay.classList.add('open-menu')
    document.querySelector('body').classList.add('no-scroll')
})

btnClose.addEventListener('click', ()=> {
    overlay.classList.remove('open-menu')
    document.querySelector('body').classList.remove('no-scroll')
})

window.onclick = (e) => {
    if(e.target == overlay) {
        overlay.classList.remove('open-menu')
        document.querySelector('body').classList.remove('no-scroll')
    }
}
