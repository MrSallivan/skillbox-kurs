function printWeekDay() {
	let dayIndex = new Date().getDay()
	console.log(dayIndex)
	let week = [
		"воскресенье",
		"понедельник",
		"вторник",
		"среда",
		"четверг",
		"пятница",
		"суббота",
	]
	console.log(`Today ${week[dayIndex]}`)
}
// printWeekDay()

//HOME WORK
let blacklist = ['asd@mail.ru', 'qwe@yandex.ru', 'sfn13i@mail.ru',
	'g0orc3x1@outlook.com']
let checkArr = [
	'o@outlook.com',
	'hr6zdl @yandex.ru',
	'kaft93x @outlook.com',
	'dcu @yandex.ru',
	'19dn @outlook.com',
	'pa5h @mail.ru',
	'281av0 @gmail.com',
	'8edmfh @outlook.com',
	'sfn13i@mail.ru',
	'g0orc3x1@outlook.com'
]
function IsNotBlacklist(emailList, blackList) {
	let rezArr = []
	for (const item of emailList) {
		if (!blackList.includes(item)) rezArr.push(item)
	}
	return console.log(rezArr)
}

// IsNotBlacklist(checkArr, blacklist)

//Home WORK

function finishCoast(sum, numberElms, code = null) {
	if (code === 'ДАРИМ300') {
		if (sum < 300) return 0
		return sum - 300
	}

	if (code === 'СКИДКА15') {
		if (sum > 20000) return sum - ((sum * 15) / 100)

	}

	if (numberElms >= 10 && sum < 50000) return sum - ((sum * 5) / 100)

	if (sum > 50000) return 50000 + ((sum - 50000) - ((sum - 50000) * 20) / 100)


	return sum
}
console.log(finishCoast(350, 8,))