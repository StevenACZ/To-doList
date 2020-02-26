let btnAddTask = document.querySelector('.input-task__btn');
let tasksActives = document.querySelector('.activities-days');
let tasksCounter = 0;

btnAddTask.addEventListener('click', function() {
  let valueInput = document.querySelector('.input-task__input').value;

  let newTask = document.createElement('div');
  newTask.innerHTML = ` <div class="task">
                          <div class="left">
                            <a href="#"><i class="far fa-check-circle"></i></a>
                            <p class="heading-primary">${valueInput}</p>
                          </div>

                          <div class="right">
                            <a href="#"><i class="fas fa-trash-alt"></i></a>
                          </div>
                        </div>`;

  let tasksContainer = document.querySelector('.tasks');
  tasksContainer.appendChild(newTask);

  tasksCounter++;
  tasksActives.textContent = tasksCounter;
})