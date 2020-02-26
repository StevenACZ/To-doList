//SELECT ELEMENTS AND ASSIGN THEM TO VARS
var inputNewTask = document.querySelector('#inputNewTask');
var btnAddTask = document.querySelector('#btnAddTask');

var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");


let tasks = [];
let indexTasks = 0;

btnAddTask.addEventListener('click', function() {
  var listItem = document.createElement("li"); //<li>
  var checkBox = document.createElement("input"); //checkbox
  var label = document.createElement("label"); // <label>
  let btnRemove = document.createElement('button') // <button>
  
  listItem.value = indexTasks;
  
  label.innerText = inputNewTask.value;
  
  checkBox.type = "checkbox";
  checkBox.value = indexTasks;
  checkBox.classList.add("chk");
  
  btnRemove.textContent = 'Delete';
  btnRemove.value = indexTasks;
  btnRemove.id = 'btnDelete';
  btnRemove.onclick = function() { 
    // of todolist to completelist console.log(completeUl.appendChild(this.parentElement));
    // remove this.parentElement.remove();
   };
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(btnRemove);
  
  toDoUl.appendChild(listItem);
  
  tasks.push(listItem);
  indexTasks++;
  
  console.log(tasks);
  console.log(listItem);
})























/*let btnAddTask = document.querySelector('.input-task__btn');
let tasksActives = document.querySelector('.activities-days');
let incompleteTasksCounter = 0;
let completeTasksCounter = 0;

let completeTasks = [];
let incompleteTasks = [];

btnAddTask.addEventListener('click', function() {
  let valueInput = document.querySelector('.input-task__input').value;

  let newTask = document.createElement('div');
  newTask.classList.add('task');

  let left = document.createElement('div');
  left.classList.add('left');
  let btnComplete = document.createElement('a');
  btnComplete.value = 23;
  console.log(btnComplete);
  let iconCheck = document.createElement('i');
  iconCheck.classList.add('far');
  iconCheck.classList.add('fa-check-circle');

  let p = document.createElement('p');
  p.classList.add('heading-primary')
  p.textContent = valueInput;

  let right = document.createElement('div');
  right.classList.add('right');
  let btnDelete = document.createElement('a');
  let iconTrash = document.createElement('i');
  iconTrash.classList.add('far');
  iconTrash.classList.add('fa-trash-alt');

  newTask.appendChild(left);
  left.appendChild(btnComplete);
  left.appendChild(p);
  btnComplete.appendChild(iconCheck);

  newTask.appendChild(right);
  right.appendChild(btnDelete);
  btnDelete.appendChild(iconTrash);

  let tasksContainer = document.querySelector('.tasks');
  tasksContainer.appendChild(newTask);

  incompleteTasksCounter++;
  tasksActives.textContent = incompleteTasksCounter;

  incompleteTasks.push(newTask);
  console.log(newTask);
  console.log(incompleteTasks);
});

/*let btnCompleteTask = document.querySelectorAll('#complete');

btnCompleteTask.addEventListener('click', function() {
  console.log(btnCompleteTask);
});*/