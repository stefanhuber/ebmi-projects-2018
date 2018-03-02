export class Controller {

    constructor() {
        this.todoItems = ['bla','blup'];
        this.insertButton = document.querySelector('header button');
        this.insertText = document.querySelector('header input');
        this.todoList = document.querySelector('section');

        this.insertButton.addEventListener('click', () => this.addTodo());
        this.todoList.addEventListener('click', (e) => this.handleTodoAction(e));
        this.render();
    }

    handleTodoAction(e) {
        let target = e.target;

        if (target.dataset.index >= 0 && target.dataset.action == 'remove') {
            this.todoItems.splice(target.dataset.index, 1);
            this.render();
        }
    }

    addTodo() {
        this.todoItems.push(this.insertText.value);
        this.insertText.value = '';

        this.render();
    }

    render() {
        this.todoList.innerHTML = '';

        for (let i = 0; i < this.todoItems.length; i++) {
            let todoItem = document.createElement('div');
            let text = document.createTextNode(this.todoItems[i]);
            let removeButton = document.createElement('button');
            removeButton.dataset.index = i;
            removeButton.dataset.action = 'remove';
            removeButton.textContent = 'Löschen';

            todoItem.appendChild(text);
            todoItem.appendChild(removeButton);
            this.todoList.appendChild(todoItem);
        }        
    }

}