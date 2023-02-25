const TaskFormFactory = (project, tasksContainer) => {
  const newTaskForm = document.createElement('form');
  newTaskForm.className = "flex mt-4"

  const titleInput = document.createElement('input');
  titleInput.setAttribute('placeholder', 'Add Todo');
  titleInput.className = 
    "shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-400";

  
  function inputGenerator(name) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    
    input.setAttribute('name', name);

  }

  const submitButton = document.createElement('button');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;
    const priority = parseInt(e.target[2].value);

    project.createNewTask(title, description, priority);

    saveToLocalStorage();

    // Add a show-updated-form
    displayTasks(tasksContainer, project);
  });
  submitButton.className = 
    "flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal";

  newTaskForm.append(input, submitButton);  
  return newTaskForm;
};

const taskFormDisplayFactory = (project, tasksContainer) => {
  const formWrapper = document.createElement('div');
  formWrapper.classList.add('mb-4')

  const form = TaskFormFactory(project, tasksContainer);

  formWrapper.appendChild(form);
  return formWrapper;
}

export { TaskFormFactory, taskFormDisplayFactory };
