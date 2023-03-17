const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
todoList.prepend()

todoBtn.addEventListener('click', createPost);
todoList.addEventListener('click', deletePost);
todoList.addEventListener('click', completePost);
todoList.addEventListener('click', editPost);

function createPost(e) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("trash-btn");
    todoDiv.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.classList.add("edit-btn");
    todoDiv.appendChild(editBtn);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deletePost(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}

function completePost(e) {
    const item = e.target;
    if (item.classList[0] === 'completed-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}