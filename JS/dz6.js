//--------------1
let objects = [
	{ name: 'Василий', surname: 'Васильев' },
	{ name: 'Иван', surname: 'Иванов' },
	{ name: 'Пётр', surname: 'Петров' }
]
/*
Результат выполнения должен быть:
[
{ name: 'Иван', surname: 'Иванов' }
]
 */
function fn(obj, key, value) {
	let rez = obj.filter((item) => item[key] === value)
	return rez
}

let result = fn(objects, 'name', 'Иван');
console.log(result)
//-----------------2

let selectArr = [
	{ value: 'null', label: 'Select option' },
	{ value: 'honda', label: 'Honda' },
	{ value: 'mazda', label: 'Mazda' },
	{ value: 'toyota', label: 'Toyota' },
	{ value: 'suzuki', label: 'Suzuki' },
]

function select(arr, defolt = 0){

	let selectEl = document.createElement('select')
	document.body.append(selectEl)

	arr.forEach((item) => {
		let opt = document.createElement('option')
		opt.value = item.value
		opt.innerHTML = item.label
		selectEl.append(opt)
		return console.log(opt)
	})
}

select(selectArr)

/* <select name="select" id="sel">
	<option value="null" selected>Select option</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Free</option>
</select> */
