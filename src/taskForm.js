import { saveToLocalStorage } from ".";
import { displayTasks } from "./projectPage";

const TaskFormFactory = (project, tasksContainer) => {
  const newTaskForm = document.createElement('form');
  newTaskForm.className = "flex mt-4"

  const titleInput = inputGenerator('title');
  titleInput.required = true;
  const descriptionInput = inputGenerator('description');

  function inputGenerator(name) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `${name}`;
    input.className = 
      "shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
    
    input.setAttribute('name', name);

    return input;
  }

  const submitButton = document.createElement('button');
  submitButton.className = 
    "flex-no-shrink p-2 border-2 rounded text-blue-400 border-blue-600 hover:text-white hover:bg-blue-600";
  submitButton.textContent = 'Add';

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value
    const description = descriptionInput.value
    const priority = 1

    project.createNewTask(title, description, priority);

    saveToLocalStorage();

    // Add a show-updated-form
    displayTasks(tasksContainer, project);
  });

  newTaskForm.append(titleInput, descriptionInput, submitButton); 
  
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
