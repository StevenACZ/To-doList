let valueInput = document.querySelector('.input-task__input').value;
let btnAddTask = document.querySelector('.input-task__btn');

btnAddTask.addEventListener('click', function() {
  let newTask = document.createElement('div');
  newTask.classList.add('task');
  newTask.textContent = valueInput;

  let tasksContainer = document.querySelector('.tasks');
  tasksContainer.appendChild(newTask);
  console.log(newTask);
})