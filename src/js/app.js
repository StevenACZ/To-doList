//SELECT ELEMENTS AND ASSIGN THEM TO VARS
var inputNewTask = document.querySelector('#inputNewTask');
var btnAddTask = document.querySelector('#btnAddTask');

let completeTasks = document.querySelector('#completeTasks');
let incompleteTasks = document.querySelector('#incompleteTasks');

let activities = document.querySelector('.activities-days');

var toDoUl = document.querySelector(".todo-list");
var completeUl =  document.querySelector(".complete-list");

let indexTasks = 0;

btnAddTask.addEventListener('click', function() {
  var listItem = document.createElement("li");

  var left = document.createElement("div");
  var aLeft = document.createElement("a");
  let iLeft = document.createElement('i');
  let pLeft = document.createElement('p');
  
  let right = document.createElement('div');
  var aRight = document.createElement("a");
  let iRight = document.createElement('i');

  
  listItem.value = indexTasks;
  listItem.classList.add('task');

  left.classList.add('left');

  aLeft.id = 'btnComplete';
  aLeft.onclick = function() { 
    completeUl.appendChild(this.parentElement.parentElement);
    indexTasks--;
    activities.textContent = indexTasks;
   };

  iLeft.classList.add('far');
  iLeft.classList.add('fa-check-circle');

  pLeft.classList.add('heading-primary');
  pLeft.textContent = inputNewTask.value;

  right.classList.add('right');
  
  aRight.id = 'btnDelete';
  aRight.onclick = function() { 
    this.parentElement.parentElement.remove();
    indexTasks--;
    activities.textContent = indexTasks;
   };

  iRight.classList.add('fas');
  iRight.classList.add('fa-trash-alt');

  listItem.appendChild(left);
  listItem.appendChild(right);

  left.appendChild(aLeft);
  aLeft.appendChild(iLeft);
  left.appendChild(pLeft);

  right.appendChild(aRight);
  aRight.appendChild(iRight);

  toDoUl.appendChild(listItem);

  indexTasks++;
  activities.textContent = indexTasks;
}) 


// Complete tasks Page
completeUl.style.display = 'none';
completeTasks.addEventListener('click', function() {
  toDoUl.style.display = 'none';
  completeUl.style.display = 'block';
  
  document.getElementById('incomplete').classList.add('active');
  document.getElementById('complete').classList.remove('active');

})

// Incomplete tasks Page
incompleteTasks.addEventListener('click', function() {
  toDoUl.style.display = 'block';
  completeUl.style.display = 'none';
  incompleteTasks.classList.add('active');

  document.getElementById('complete').classList.add('active');
  document.getElementById('incomplete').classList.remove('active');
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