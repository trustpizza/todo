import { allProjects, currentProject, saveToLocalStorage, projectCounter } from ".";
import { updateSidebar } from "./sidebar";
import TodoProject from "./todoProject";

const projectFormFactory = () => {
  const newProjectForm = document.createElement("form");
  newProjectForm.className =
    "flex flex-col p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";

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
    )

    allProjects.push(newProject);
    currentProject.set(newProject);
    
    updateSidebar();
    saveToLocalStorage();
  });

  function closeForm() {
    newProjectForm.parentElement.classList.add('hidden');
    console.log(newProjectForm.parentElement)
  }

  newProjectForm.append(
    titleSection,
    description,
    submitButton
  );

  return newProjectForm;
}

const projectFormDisplayFactory = (parentDiv) => {
  const projectForm = projectFormFactory();
  
  const projectFormWrapper = document.createElement("div");
  projectFormWrapper.className =
    "w-full h-full fixed hidden bg-gray-200 flex items-center justify-center";
  projectFormWrapper.id = "newProjectFormWrapper";
  
  projectFormWrapper.append(projectForm);
  parentDiv.append(projectFormWrapper);
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
