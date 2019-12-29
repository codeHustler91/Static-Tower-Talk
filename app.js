const title = document.querySelector('h1')

title.addEventListener('click', (event) => changeTitle())

function changeTitle() {
    title.innerText === 'Tower Talk' ? title.innerText = 'Easter Egg!' : title.innerText = 'Tower Talk'
}