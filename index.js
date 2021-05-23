const body = document.querySelector('.main')
const left = document.querySelector('#izquierdo')
const right = document.querySelector('#derecho')
const p = document.querySelector('p')
p.value = 0
function incrementa() {
    p.innerText = p.value++ 
}
function resta () {
    p.innerText = p.value--
}

left.addEventListener('click', (e) => {
    e.preventDefault()
    resta()
})
right.addEventListener('click', (e) => {
    e.preventDefault()
    incrementa()
})
