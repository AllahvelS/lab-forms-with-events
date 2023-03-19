    const todoForm = document.querySelector('#todo-form');
    const todoList = document.querySelector('#todo-list');
    const errorMessage = document.querySelector('#error-message');

      todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoInput = document.querySelector('#todo-input');
        const todoText = todoInput.value;
        if (todoText === '') {
          errorMessage.textContent = 'Error. Todo cannot be empty';
        
        }
        const createdLi = document.createElement('li');
        createdLi.textContent = todoText;
        todoList.appendChild(createdLi);
        todoInput.value = '';
      });

      todoList.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (todoList.contains(clickedElement)) {
          clickedElement.style.textDecoration = 'line-through';
        }
      });

    


