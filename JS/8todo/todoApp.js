(function () {

	//Create and return caption of app

	function createAppTitle(title) {
		let appTitle = document.createElement('h2')
		appTitle.innerHTML = title
		return appTitle
	}

	//Create and return form fo todo

	function createTodoItemForm() {
		let form = document.createElement('form')
		let input = document.createElement('input')
		let buttonWrapper = document.createElement('div')
		let button = document.createElement('button')

		form.classList.add('input-group', 'mb-3')
		input.classList.add('form-control')
		input.placeholder = 'Введите название нового дела'
		buttonWrapper.classList.add('input-group-append')
		button.classList.add('btn', 'btn-primary')
		button.textContent = 'Добавить дело'

		buttonWrapper.append(button)
		form.append(input)
		form.append(buttonWrapper)

		return {
			form,
			input,
			button,
		}
	}

	//Create and return elements list
	function createTodoList() {
		let list = document.createElement('ul')
		list.classList.add('list-group')
		return list
	}

	function createTodoItem(name) {
		let item = document.createElement('li')
		let buttonGroup = document.createElement('div')
		let doneButton = document.createElement('button')
		let deleteButton = document.createElement('buttton')

		item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
		item.textContent = name

		buttonGroup.classList.add('btn-group', 'btn-group-sm')
		doneButton.classList.add('btn', 'btn-success')
		doneButton.textContent = 'Готово'
		deleteButton.classList.add('btn', 'btn-danger')
		deleteButton.textContent = 'Удалить'

		buttonGroup.append(doneButton)
		buttonGroup.append(deleteButton)
		item.append(buttonGroup)

		return {
			item,
			doneButton,
			deleteButton
		}
	}



	function createTodoApp(container, title = 'Список дел', listTodos) {

		function isFormEmpty() {
			todoItemForm.button.setAttribute('disabled', 'true')

			window.addEventListener('input', (e) => {
				if (e.target.value !== '') {
					todoItemForm.button.removeAttribute('disabled')
				} else {
					todoItemForm.button.setAttribute('disabled', 'true')
				}
			})

		}

		let todoAppTitle = createAppTitle(title)
		let todoItemForm = createTodoItemForm()
		let todoList = createTodoList()


		container.append(todoAppTitle)
		container.append(todoItemForm.form)
		container.append(todoList)

		if (listTodos) {

			listTodos.forEach((itemList) => {
				let listTodosItem = createTodoItem(itemList.name)
				if (itemList.done) {
					listTodosItem.item.classList.toggle('list-group-item-success')
				}
				
				listTodosItem.doneButton.addEventListener('click', () => {
					listTodosItem.item.classList.toggle('list-group-item-success')
				})

				listTodosItem.deleteButton.addEventListener('click', () => {
					if (confirm('Вы уверены?')) {
						listTodosItem.item.remove()
					}
				})

				todoList.append(listTodosItem.item)

			})

		}

		isFormEmpty()

		todoItemForm.form.addEventListener('submit', function (e) {
			e.preventDefault()

			if (!todoItemForm.input.value) {
				return
			}

			let todoItem = createTodoItem(todoItemForm.input.value)

			todoItem.doneButton.addEventListener('click', () => {
				todoItem.item.classList.toggle('list-group-item-success')
			})
			todoItem.deleteButton.addEventListener('click', () => {
				if (confirm('Вы уверены?')) {
					todoItem.item.remove()
				}
			})

			todoList.append(todoItem.item)

			todoItemForm.input.value = ''

			if (todoItemForm.input.value === '') {
				todoItemForm.button.setAttribute('disabled', 'true')
			}
		})



	}




	window.createTodoApp = createTodoApp

})()