//task 1

let arr = []

function random(count, start, end) {
	for (let i = 0; i < count; ++i) {
		// let abs = Math.round(Math.abs(Math.random() * (end - start) + start));
		let abs = Math.round(Math.random() * (end - start) + start);
		arr.push(abs)
	}
	console.log(arr.length)
	console.log(arr)
}
random(70, 100, -5)

//task 2
function backStr(str) {
	let rezStr = ''
	for (let i = str.length - 1; i >= 0; --i) {
		rezStr += str[i]
	}
	let final = rezStr.toLowerCase()

	return console.log(final)
}
backStr('Hello')

//Task3

function tanks() {
	let roadMines = []
	for (let i = 0; i < 10; i++) {
		if(Math.round(Math.random()) > 0.5){
			roadMines.push(true)
		} else {
			roadMines.push(false)
		}
	}
	countMines = 0
	countTurn = 0
	for (let i = 0; i < roadMines.length; i++) {
		countTurn++
		const element = roadMines[i];

		console.log(`Танк переместился на ${countTurn}`)

		if (element === true) {
			countMines++
			if(countMines === 2){
				console.log('Танк уничтожен')
				break
			}
			console.log(`Танк поврежден`)
		}
		
	}

}
tanks()