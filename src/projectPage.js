import { update } from "lodash";
import { TaskFormLogic } from "./taskFormLogic";
import PlusSign from "./photos/plus.svg";
import { currentProject, reloadProjectDisplay, saveToLocalStorage } from ".";

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

  let form = TaskFormLogic(project, tasksDiv);
  let newTaskButton = NewTaskButton(form);
  let tasks = project.getTodoTasks();

  content.append(newTaskButton, form);
  container.append(titleSection, content, tasksDiv);

  const update = (newProject) => {
    const newTitleSection = TitleDisplay(newProject);
    const newForm = TaskFormLogic(newProject, tasksDiv);
    const newerTaskButton = NewTaskButton(newForm);
    const newTasks = newProject.getTodoTasks();

    titleSection.parentNode.replaceChild(newTitleSection, titleSection);
    form.parentNode.replaceChild(newForm, form);
    newTaskButton.parentNode.replaceChild(newerTaskButton, newTaskButton);

    titleSection = newTitleSection;
    form = newForm;
    newTaskButton = newerTaskButton;
    tasks = newTasks;

    displayTasks(tasksDiv, project);
  };

  return { update, container };
}

// From here below are helper functions!

function displayTasks(parent, project) {
  const tasks = project.getTodoTasks();

  parent.innerHTML = "";
  Object.keys(tasks).forEach((key) => {
    const task = tasks[key];
    parent.appendChild(TaskDisplayFactory(task, project));
  });
}

const TaskDisplayFactory = (task, project) => {
  const taskDisplay = document.createElement("div");
  taskDisplay.className = "flex mb-4 items-center w-80 self-center";

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
  title.textContent = `${task.title}:`;
  title.className = "text-2xl";

  const description = document.createElement("div");
  description.textContent = `${task.description}`;
  description.className = "flex-grow break-all";

  sectionDiv.append(title, description);

  const priority = document.createElement("div");
  priority.textContent = `${task.priority}`;
  priority.className = "row-span-3 p-2";

  const checkButton = document.createElement("button");
  checkButton.className =
    "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ";
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
    const strikethrough = [title, description]

    if (task.isComplete) {
      for (const text of strikethrough) {
        text.classList.add(
          "text-green-400",
          "line-through"
        )
      } 
    } else {
      for (const text of strikethrough) {
        text.classList.remove(
          "text-green-400",
          "line-through"
        )
      }
    }
  }
 
  taskDisplay.append(sectionDiv, checkButton, deleteButton);

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

const NewTaskButton = (target) => {
  const newTaskButton = document.createElement("button");
  const buttonImage = new Image();
  buttonImage.src = PlusSign;
  buttonImage.className =
    "h-10 w-10 p-0 fill-slate-50 transition ease-in-out duration-100";

  newTaskButton.append(buttonImage);

  newTaskButton.className =
    "bg-blue-500 hover:bg-blue-600 text-white font-bold rounded self-center";
  newTaskButton.addEventListener("click", () => {
    taskButtonControlls();
  });

  const taskButtonControlls = () => {
    if (!buttonImage.classList.contains("rotate-45")) {
      buttonImage.classList.add("rotate-45");
      target.classList.remove("h-0", "opacity-0", "-translate-y-96");
    } else {
      buttonImage.classList.remove("rotate-45");
      target.classList.add("-translate-y-96", "h-0", "opacity-0");
    }
  };

  return newTaskButton;
};



export { ProjectDisplayFactory, displayTasks };
