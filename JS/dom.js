let par = document.querySelector('#p')
let button = document.querySelector('.button')

function incrementCount() {
	let count = parseInt(par.textContent)
	par.textContent = count + 1
}

button.addEventListener('click', incrementCount)


