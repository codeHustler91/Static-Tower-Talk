// targets
const logo = document.querySelector('.logo')

// event listeners
logo.addEventListener('click', (event) => changeTitle())

// functions
function changeTitle() {
    logo.innerText == 'TOWER TALK' ? logo.innerText = 'EASTER EGGG!!!' : logo.innerText = 'TOWER TALK'
}