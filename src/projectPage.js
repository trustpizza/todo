import { currentProject, reloadProjectDisplay, saveToLocalStorage } from ".";
import { taskFormDisplayFactory } from "./taskForm";

function ProjectDisplayFactory(project) {
  const container = document.createElement("div");
  container.className =
    "container mx-auto my-10 mx-4 bg-white rounded-md flex flex-col";
  container.id = "projectDisplay";

  const content = document.createElement("div");
  content.id = "tasks-container";
  content.className =
    "container mx-auto px-2 rounded flex flex-col items-center";

  const tasksDiv = document.createElement("div");
  tasksDiv.className =
    "container mx-auto px-2 w-full h-full rounded flex flex-col";

  let titleSection = TitleDisplay(project);

  let formWrapper = taskFormDisplayFactory(project, tasksDiv);
  let tasks = project.getTodoTasks();

  container.append(titleSection, formWrapper, content, tasksDiv);

  const update = (newProject) => {
    const newTitleSection = TitleDisplay(newProject);
    const newFormWrapper = taskFormDisplayFactory(newProject, tasksDiv);
    const newTasks = newProject.getTodoTasks();

    titleSection.parentNode.replaceChild(newTitleSection, titleSection);
    formWrapper.parentNode.replaceChild(newFormWrapper, formWrapper);

    titleSection = newTitleSection;
    formWrapper = newFormWrapper;
    tasks = newTasks;

    displayTasks(tasksDiv);
  };

  return { update, container };
}

// From here below are helper functions!

function displayTasks(parent) {
  const project = currentProject.get();
  const tasks = project.getTodoTasks();

  parent.innerHTML = "";
  Object.keys(tasks).forEach((key) => {
    const task = tasks[key];
    parent.appendChild(TaskDisplayFactory(task, project));
  });
}

const TaskDisplayFactory = (task, project) => {
  const taskDisplay = document.createElement("div");
  taskDisplay.className = "flex mb-4 items-center w-full self-center";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.className =
    "flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-400 hover:text-white hover:bg-red-400";
  deleteButton.addEventListener("click", () => {
    project.deleteTask(task.id);
    saveToLocalStorage();
    reloadProjectDisplay();
  });

  const sectionDiv = document.createElement("div");
  sectionDiv.className =
    "flex gap-2 items-start justify-center flex-grow flex-col";

  const title = document.createElement("p");
  title.textContent = `${task.title}`;
  title.className = "text-xl break-all";

  const description = document.createElement("div");
  description.textContent = `${task.description}`;
  description.className = "flex-grow break-all text-gray-400";

  sectionDiv.append(title);

  sectionDiv.addEventListener('click', () => {
    // EXPAND TASK HERE!
  })

  const priority = document.createElement("div");
  priority.textContent = `${task.priority}`;
  priority.className = "row-span-3 p-2";

  const checkButton = document.createElement("button");
  checkButton.className =
    "flex-no-shrink w-max p-2 ml-4 mr-2 border-2 rounded hover:text-white ";
  updateCheckButton();
  updateTaskText();

  checkButton.addEventListener("click", () => {
    task.isComplete == true
      ? (task.isComplete = false)
      : (task.isComplete = true);

    updateCheckButton();
    updateTaskText();
    saveToLocalStorage();
  });

  function updateCheckButton() {
    if (task.isComplete) {
      checkButton.textContent = "Done";
      checkButton.classList.remove(
        "text-grey",
        "border-gray-400",
        "hover:bg-gray-500"
      );
      checkButton.classList.add(
        "text-green",
        "border-green-300",
        "hover:bg-green-500"
      );
    } else {
      checkButton.textContent = "Not Done";
      checkButton.classList.add(
        "text-grey",
        "border-gray-400",
        "hover:bg-gray-500"
      );
      checkButton.classList.remove(
        "text-green",
        "border-green-300",
        "hover:bg-green-500"
      );
    }
  }

  function updateTaskText() {
    const strikethrough = [title, description];

    if (task.isComplete) {
      for (const text of strikethrough) {
        text.classList.add("text-green-400", "line-through");
      }
    } else {
      for (const text of strikethrough) {
        text.classList.remove("text-green-400", "line-through");
      }
    }
  }

  const buttonSection = document.createElement("div");
  buttonSection.className = "flex items-end";
  buttonSection.append(checkButton, deleteButton);

  taskDisplay.append(sectionDiv, buttonSection);

  return taskDisplay;
};

const TitleDisplay = (project) => {
  const titleSection = document.createElement("div");
  titleSection.className = "flex flex-col";

  const title = document.createElement("h1");

  title.textContent = project.getName();
  title.className = "text-4xl font-bold text-center";

  const projDescription = document.createElement("span");
  projDescription.textContent = project.getDesc();
  projDescription.className = "text-slate-600 text-center";

  titleSection.append(title, projDescription);
  return titleSection;
};
export { ProjectDisplayFactory, displayTasks };
