let options = {
	title: "Menu",
	width: 100,
	height: 200
};

let { title, width, height } = options
let { title: t = 100, width: w, height: h, dool = 300 } = options

console.log(title, width, height)
console.log(t, w, h, dool)

let obj = {
	size: {
		width: 100,
		height: 200
	},
	items: ["Cake", "Donut"],
	extra: true
};

let { size: { width:ww, height:hh }, items: [item1, item2], prop = 'text' } = obj
console.log( ww, hh, item1, item2, prop)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2))

let merge = [0, ...arr1, 5, 'lol', ...arr2]
console.log(merge)

let string = 'Fuck off'
let hz = [...string]
let hz2 = string.split('')
let hz3 = Array.from(string)

console.log(hz3)
console.log(typeof hz3)
