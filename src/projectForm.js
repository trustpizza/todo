import {
  allProjects,
  currentProject,
  saveToLocalStorage,
  projectCounter,
} from ".";
import { updateSidebar } from "./sidebar";
import TodoProject from "./todoProject";
import closeImage from "./photos/close-circle-outline.svg";

const projectFormFactory = () => {
  const newProjectForm = document.createElement("form");
  newProjectForm.className =
    "relative flex flex-col p-4  md:inset-0 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";

  const titleSection = formSection("title");
  const description = formSection("description");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Create Project";
  submitButton.className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formInputs = {};
    const formData = new FormData(newProjectForm);
    for (const pair of formData) {
      formInputs[pair[0]] = pair[1];
    }

    const newProject = TodoProject(
      projectCounter.plus(),
      formInputs.title,
      formInputs.description
    );

    allProjects.push(newProject);
    currentProject.set(newProject);

    hideProjectForm(newProjectForm);
    updateSidebar();
    saveToLocalStorage();
  });

  const xButton = closeButton();

  newProjectForm.append(titleSection, description, submitButton, xButton);

  return newProjectForm;
};

const projectFormDisplayFactory = (parentDiv) => {
  const projectForm = projectFormFactory();

  const projectFormWrapper = document.createElement("div");
  projectFormWrapper.className =
    "w-full h-full fixed hidden bg-gray-200 flex items-center justify-center";
  projectFormWrapper.id = "newProjectFormWrapper";

  projectFormWrapper.append(projectForm);
  parentDiv.append(projectFormWrapper);
};

const closeButton = () => {
  const closeButton = document.createElement("button");

  closeButton.className = "absolute -top-4 -right-4 h-12 w-12";
  const buttonContent = new Image();
  buttonContent.src = closeImage;

  closeButton.appendChild(buttonContent);
  return closeButton;
};

function hideProjectForm(form) {
  form.parentElement.classList.remove("z-50");
  form.parentElement.classList.add("hidden");
}

const formSection = (labelName) => {
  const parentElement = document.createElement("div");
  parentElement.className = "mb-4";

  const label = document.createElement("label");
  label.className = "block text-gray-700 text-sm font-bold mb-2";
  label.textContent = labelName.capitalize();

  const input = document.createElement("input");
  input.setAttribute("name", labelName);
  input.className =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  // input.for = inputFor;
  parentElement.append(label, input);

  return parentElement;
};

Object.defineProperty(String.prototype, "capitalize", {
  value() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

export { projectFormDisplayFactory };
