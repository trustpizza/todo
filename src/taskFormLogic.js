import { TaskFormFactory } from "./taskForm";
import { displayTasks } from "./projectPage";
import { saveToLocalStorage } from ".";

const TaskFormLogic = (project, tasksContainer) => {
  const taskForm = TaskFormFactory();
  // Modal Submit Listener

  const form = taskForm.firstChild.firstChild;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const description = e.target[1].value;
    // let duedate = e.target[2].value;
    const priority = parseInt(e.target[2].value);

    project.createNewTask(title, description, priority);

    saveToLocalStorage();

    // Add a show-updated-form
    displayTasks(tasksContainer, project);
  });

  // Priority Div Logic to add event listeners to each selection
  for (const priority of document.getElementsByClassName("priority-div")) {
    priority.addEventListener("click", (e) => {
      const value = e.target.id.slice(-1);
      document.getElementsByClassName("hidden-priority")[0].value = value;
    });
  }

  return taskForm;
};

export { TaskFormLogic };
