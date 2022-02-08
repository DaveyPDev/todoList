
document.addEventListener('DOMContentLoaded', function() {
const removeButtons = document.querySelectorAll('li button');
const input = document.querySelector('#task-name');
const form = document.querySelector('#add-task'); 
const taskList = document.querySelector('#task-list');
const completeBox = document.querySelectorAll('checkbox');
const taskComplete = document.getElementById('task-complete')



taskList.addEventListener('click', function(e) {
   const thisList = e.target
    thisList.classList.toggle('checkedTask')

if( e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
}

})

form.addEventListener('submit', function(e) {
    e.preventDefault();  

    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button')
    const boxCheck = document.createElement('input')
    

    newTask.innerText = input.value
    removeBtn.innerText = 'X'
    newTask.appendChild(boxCheck)
    newTask.appendChild(removeBtn)
    
    // how to add a space after text
    
    input.value = ' ';
    taskList.appendChild(newTask)
    boxCheck.type = 'checkbox'
  
});
})