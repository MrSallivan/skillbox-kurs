/*
	Типы в JS простые, нулевые, object

	Простые: boolean, string, number, symbol, bigint (их значения копируются при присваивании)

	typeof '123'  - 'string'
	typeof 25  - 'number'
	typeof true  - 'boolean'
	typeof 123n  - 'bigint'
	typeof Symbol()  - 'symbol'


	Нулевые: null, undefined

	typeof null  - 'object'
	typeof undefined  - 'undefined '

	Objects: array, function {
		1. ссылочный тип, значения не копируются при присвоении
		2. Могут объединять в себе несколько значений других типов или даже вложенные объекты.
		3. Не выделяются в отдельные типы, являются частными случаями объекта
	}
	typeof []  - 'object'
	typeof function(){}  - 'function'

	Итого 8 типов данных: boolean, string, number, symbol, bigint, null, undefined, objects
*/
