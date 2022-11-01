
let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')
let navItems = document.querySelectorAll('.nav-item')
const anchors = document.querySelectorAll('a[href*="#"]')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('noscroll')
})

if (navItems.length > 0) {
	navItems.forEach(navItem => {
		navItem.addEventListener('click', onMenuClick)
	})
}

function onMenuClick(e) {
	if (nav.classList.contains('active')) {
		burger.classList.remove('active')
		nav.classList.remove('active')
		body.classList.remove('noscroll')
	}
}

for (let anchor of anchors ) {
	anchor.addEventListener('click', e => {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substring(1)
		
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}