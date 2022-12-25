let name = 'Alex'
let surname = 'Nikolaenko'
let middle = 'Valentinovich'
function getFullName() {
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
obj.whoAmI = function () {
	console.log(`My name is ${this.name} ${this.surname}`)
}


obj.whoAmI()
console.log(Object.keys(obj))


// 1 способ объединения объектов ...[]

let motherBoard = {
	usbPortCount: 8,
	chipset: 'AMD X570',
	socket: 'AM3/AM4'
}

let cpu = {
	coreCount: 8,
	cpuManufacturer: 'AMD',
	socket: 'AM4'
}

let ram = {
	ramType: 'DDR4',
	ramVolume: 8192,
	ramFraquancy: 3200
}

let computer = {
	price: 100000,
	...motherBoard,
	//свойство socket из объекта motherBoaed будет заменено на такое же св-во из cpu
	...cpu,
	...ram,

}


//2 Способ объединения объектов assign

let computerWithAssign = Object.assign(
	//целевой объект, в который будут замешаны следующие
	{
		price: 100000 
	},
	motherBoard, cpu, ram
)
console.log(computer)
console.log(computerWithAssign)

console.log(Object.keys(computer))
console.log(Object.values(computer))
console.log(Object.entries(computer))


//Ссылки на объект

let object = {model: 'Mazda'}
let object2 = object

object2.model = 'Honda'
 
console.log(object)
console.log(object2)

//Сравнение двух объектов

// obj5 и obj6 - ссылки на один и тот же объект

let obj5 = {name: 'Alex'}
let obj6 = obj5

//и они равны...
console.log(obj5 === obj6)

//obj6 становится ссылкой на объект, хоть и с такими же свойствами

obj6 = {name: 'Alex'}

//теперь они не равны...
console.log(obj5 === obj6)

//ЦИКЛЫ ПО МАССИВУ 

let values = Object.values(computer)
let keys = Object.keys(computer)
let entries = Object.entries(computer)

for (let [key, value] of entries) {
	console.log(`${key} : ${value}`)
}

for (let key of keys) {
	console.log(`\n ${key}`)
}
for (let value of values) {
	console.log(`\n ${value}`)
}

for (let key in computer) {
	console.log(computer[key])
}

console.log(typeof [])
console.log(typeof {})


function makeUser(name, age) {
	return {name, age}
}
let userObj = makeUser('Alex', 38)

console.log('name' in userObj)
console.log('nameee' in userObj)