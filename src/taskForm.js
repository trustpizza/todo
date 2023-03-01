import { saveToLocalStorage } from ".";
import { displayTasks } from "./projectPage";
import Calendar from "./photos/calendar.svg";

const TaskFormFactory = (project, tasksContainer) => {
  const newTaskForm = document.createElement("form");
  newTaskForm.className = "flex mt-4 gap-2";

  const titleInput = inputGenerator("title");
  titleInput.required = true;

  const descriptionInput = inputGenerator("description");

  const priorityInput = document.createElement("select");
  const priorityOptions = {
    Low: "1",
    Med: "2",
    High: "3",
  };

  priorityInput.className =
    "bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 border-2";

  for (const key in priorityOptions) {
    const option = document.createElement("option");
    option.setAttribute("value", priorityOptions[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    priorityInput.appendChild(option);
  }

  const calendarInputSection = calendarSection();
  const calendarInput = calendarInputSection.firstChild;

  function inputGenerator(name) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `${name}`;
    input.className =
      "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker";

    input.setAttribute("name", name);
    return input;
  }

  const submitButton = document.createElement("button");
  submitButton.className =
    "flex-no-shrink p-2 border-2 rounded text-blue-400 border-blue-600 hover:text-white hover:bg-blue-600";
  submitButton.textContent = "Add";

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const priority = parseInt(priorityInput.value);
    const date = calendarInput.value;

    project.createNewTask(title, description, date, priority);

    saveToLocalStorage();
    // Add a show-updated-form
    displayTasks(tasksContainer, project);
  });

  newTaskForm.append(
    titleInput,
    descriptionInput,
    calendarInputSection,
    priorityInput,
    submitButton
  );

  return newTaskForm;
};

const calendarSection = () => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "flex justify-center items-center";

  const calendarInput = document.createElement("input");
  calendarInput.setAttribute("type", "date");
  calendarInput.className = "calendar";

  sectionDiv.append(calendarInput);
  return sectionDiv;
};

const taskFormDisplayFactory = (project, tasksContainer) => {
  const formWrapper = document.createElement("div");
  formWrapper.classList.add("mb-4");

  const form = TaskFormFactory(project, tasksContainer);

  formWrapper.appendChild(form);
  return formWrapper;
};

export { TaskFormFactory, taskFormDisplayFactory };
