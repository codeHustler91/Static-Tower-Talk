const title = document.querySelector('h1')

title.addEventListener('click', (event) => changeTitle())

function changeTitle() {
    title.innerText == 'TOWER TALK' ? title.innerText = 'EASTER EGGG!!!' : title.innerText = 'TOWER TALK'
}