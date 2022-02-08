// not sure where to begin on how to add items for a todo list


// const {forms} = JSON.parse(localStorage.form)
// localStorage.setItem('form', JSON.stringify(form))
// JSON.parse(localStorage.getItem('form'))


// first -- read localStorage -- create localStorage = {}
// if localStorage had items - get those and add it to task{}
// if no localStorage start fresh create empty tasks{}


// tasks =[ {}, {} ]

// localStorage.setItem('k1', 'v1');
// console.log(localStorage.getItem('k1'))

// localStorage.clear();

// const taskObject =
// {
//     taskValue : "take the dogs out",
//     finished : true
// }

// localStorage.setItem('task1', JSON.stringify(taskObject))
// console.log(localStorage.getItem('task1'))
// localTask = JSON.parse(localStorage.getItem('task1'));
// console.log(localTask)

// first -> read localStorage
// ​
// if localstorage has items -> get those and add it to tasks[]
// if no localStorage start fresh, create empty tasks[]
// ​
// ​
// // trying to figure out making 
// // const {forms} = JSON.parse(localStorage.form)
// // localStorage.setItem('form', JSON.stringify(form))
// // JSON.parse(localStorage.getItem('form'))
// ​
// tasks = [{}, {}];
// ​
// localStorage.setItem('k1','v1')
// console.log(localStorage.getItem('k1'));
// ​
// localStorage.clear();
// ​
// const taskObject = {
//     taskValue : 'take the dogs out',
//     finished : true
// };
// ​
// localStorage.setItem('task1', JSON.stringify(taskObject))
// ​
// localTask = JSON.parse(localStorage.getItem('task1'));
// console.log(localTask);
// localStorage.clear()

// const todoForm = document.getElementById("newTodoForm");
// const todoList = document.getElementById("todoList");

// // retrieve from localStorage
// const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// for (let i = 0; i < savedTodos.length; i++) {
//   let newTodo = document.createElement("li");
//   newTodo.innerText = savedTodos[i].task;
//   newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
//   if (newTodo.isCompleted) {
//     newTodo.style.textDecoration = "line-through";
//   }
//   todoList.appendChild(newTodo);
// }

// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let newTodo = document.createElement("li");
//   let taskValue = document.getElementById("task").value;
//   newTodo.innerText = taskValue;
//   newTodo.isCompleted = false;
//   todoForm.reset();
//   todoList.appendChild(newTodo);

//   // save to localStorage
//   savedTodos.push({ task: newTodo.innerText, isCompleted: false });
//   localStorage.setItem("todos", JSON.stringify(savedTodos));
// });

// todoList.addEventListener("click", function(event) {
//   let clickedListItem = event.target;

//   if (!clickedListItem.isCompleted) {
//     clickedListItem.style.textDecoration = "line-through";
//     clickedListItem.isCompleted = true;
//   } else {
//     clickedListItem.style.textDecoration = "none";
//     clickedListItem.isCompleted = false;
//   }

//   // breaks for duplicates - another option is to have dynamic IDs
//   for (let i = 0; i < savedTodos.length; i++) {
//     if (savedTodos[i].task === clickedListItem.innerText) {
//       savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
//       localStorage.setItem("todos", JSON.stringify(savedTodos));
//     }
//   }
// });