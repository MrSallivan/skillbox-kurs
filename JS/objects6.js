let name = 'Alex'
let surname = 'Nikolaenko'
let middle = 'Valentinovich'
function getFullName(){
	return this.name + ' ' + this.surname
}

let me = {
	name: name,
	surname: surname,
	middleName: middle,
	birthDate: { year: 1984, month: 5, day: 5 },
	getAge: function () {
		let now = new Date()
		let born = new Date(
			this.birthDate.year,
			this.birthDate.month + 1,
			this.birthDate.day
		)
		console.log(now, born)

		let diffInMillSec = now.getTime() - born.getTime()
		
		console.log(diffInMillSec)

		return Math.floor(diffInMillSec / 1000 / 60 / 60 / 24 / 365.25)
	},
	occupation: 'Системный архитектор',
	married: true,
	'property with space': null,
	'property.with.dots': undefined
}
console.log(me.getAge())


let obj = { name, surname, getFullName }
obj.whoAmI = function() {
	console.log(`My name is ${this.name} ${this.surname}`)
}


obj.whoAmI()

//  video 6.4 start