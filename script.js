const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
function addTask() {
    const taskValue = input.value.trim();
    if (taskValue === "") {
        alert("Boş buraxmaq olmaz!");
        return;
    }
    const li = document.createElement('li');
    const spanText = document.createElement('span');
    spanText.className = 'task-text';
    spanText.innerText = taskValue;
    const btnGroup = document.createElement('div');
    btnGroup.className = 'button-group';
    const likeBtn = document.createElement('span');
    likeBtn.className = 'btn-action';
    likeBtn.innerHTML = '✔️';
    likeBtn.title = 'Tamamlandı';
    likeBtn.onclick = function() {
        spanText.classList.toggle('completed');
    };
    const deleteBtn = document.createElement("span");
    deleteBtn.className = 'btn-action';
    deleteBtn.innerHTML = '❌';
    deleteBtn.title = 'Sil';
    deleteBtn.onclick = function() {
        li.remove();
    };
    btnGroup.appendChild(likeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(spanText);
    li.appendChild(btnGroup);
    todoList.appendChild(li);
    input.value = "";
}
addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});