// targets
const logo = document.querySelector('.logo')
const copyDiane = document.querySelector('#copyDiane')

// event listeners
logo.addEventListener('click', changeTitle);
copyDiane.addEventListener('click', (event) => copy(event));

// functions
function changeTitle() {
    logo.innerText == 'TOWER TALK' ? logo.innerText = 'EASTER EGGG!!!' : logo.innerText = 'TOWER TALK'
}
function copy(event) {
    console.log(event.target.name, 'event info')
    // create temporary input element to copy from
    const body = document.querySelector('body')
    const tempInput = document.createElement('input');
    body.appendChild(tempInput);
    tempInput.setAttribute('value', event.target.name)
    // will only select from input or textarea element
    tempInput.select();
    document.execCommand('copy');
    body.removeChild(tempInput);
}