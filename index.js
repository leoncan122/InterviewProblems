const body = document.querySelector('.main')
const left = document.querySelector('#izquierdo')
const right = document.querySelector('#derecho')
const p = document.querySelector('p')
p.value = 0

//table rows
const tableBody = document.querySelector('#tableBody')


var basePath = new URL('http://localhost:3000/')
var getPath  = new URL('users', basePath)

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

//llamando a fake API
fetch(getPath)
.then(res => res.json())
.then(data => {
    data.forEach((user, index) => {
        const row = document.createElement('tr')
        const id = document.createElement('td')
        const firstName = document.createElement('td')
        const lastName = document.createElement('td')
        const email = document.createElement('td')

        tableBody.appendChild(row)
        row.className = `row${index}`
        row.appendChild(id)
        row.appendChild(firstName)
        row.appendChild(lastName)
        row.appendChild(email)
        
        id.innerText = user.id
        firstName.innerText = user.firstName
        lastName.innerText = user.lastName
        email.innerText = user.email

    })
})
