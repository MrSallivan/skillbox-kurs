let fruit = ['apple', 'banana', 'tomato']
fruit.push('peniapple')
fruit.unshift('hui')


let fibo = [1, 1]

for (let i = 1; i < 50; ++i){
	fibo.push(fibo[i] + fibo[i - 1])
}

let fruit2 = ['Ira', 'Vanya', 'Kolya']
for (const i in fruit2) {
	console.log(`${parseInt(i) + 1} место: ${fruit2[i]}`)
}