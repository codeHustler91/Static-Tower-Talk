// targets
const title = document.querySelector('h1')

// event listeners
title.addEventListener('click', (event) => changeTitle())

// functions
function changeTitle() {
    title.innerText == 'TOWER TALK' ? title.innerText = 'EASTER EGGG!!!' : title.innerText = 'TOWER TALK'
}