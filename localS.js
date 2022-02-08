
const taskList = document.getElementById('task-list')
const addTasks = document.getElementById('add-tasks')


const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
for ( let i = 0; i < savedTasks.length; i++) {
    let newTask = document.createElement('li');
    newTask.innerText = savedTasks[i].task;
    newTask.isCompleted = savedTasks[i].isCompleted ? true : false;
    if ( newTask.isCompleted ) {
        newTask.classList.toggle('checkedTask')
    }
    newTask.appendChild(newTask);
}

addTasks.addEventListener('submit', function(e) {
    e.preventDefault();
    let newTask = document.createElement('li');
    let taskName = document.getElementById('task').value;
    newTask.innerText = taskName;
    newTask.isCompleted = false;
    addTasks.reset()
    taskList.appendChild(newTask);
    savedTasks.push({ task: newTask.innerText, isCompleted: false});
    localStorage.setItem('task', JSON.stringify(addTasks))
})

taskList.addEventListener('click', function(e) {
    let taskClick = e.target;
    if  ( !taskClick.isCompleted) {
        taskClick.classList.toggle('checkedTask')
        taskClick.isCompleted = true;
    } else { 
        taskClick.isCompleted = false;
    }
})
