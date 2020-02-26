let btnAddTask = document.querySelector('.input-task__btn');
let tasksActives = document.querySelector('.activities-days');
let tasksCounter = 0;

let completeTasks = [];
let incompleteTasks = [];

btnAddTask.addEventListener('click', function() {
  let valueInput = document.querySelector('.input-task__input').value;

  let newTask = document.createElement('div');
  newTask.classList.add('task');

  let left = document.createElement('div');
  left.classList.add('left');
  let btnComplete = document.createElement('a');
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

  /*newTask.innerHTML = ` <div class="task">
                          <div class="left">
                            <a href="#" value="${tasksCounter}" id="complete"><i class="far fa-check-circle"></i></a>
                            <p class="heading-primary">${valueInput}</p>
                          </div>

                          <div class="right">
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </div>
                        </div>`;*/

  let tasksContainer = document.querySelector('.tasks');
  tasksContainer.appendChild(newTask);

  tasksCounter++;
  tasksActives.textContent = tasksCounter;

  incompleteTasks.push(newTask);
  console.log(newTask);
  console.log(incompleteTasks);
});

/*let btnCompleteTask = document.querySelectorAll('#complete');

btnCompleteTask.addEventListener('click', function() {
  console.log(btnCompleteTask);
});*/