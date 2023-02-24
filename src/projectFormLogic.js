import { projectForm } from "./projectForm";
import TodoProject from "./todoProject";
import {
  projectCounter,
  allProjects,
  currentProject,
  sidebar,
  saveToLocalStorage,
} from ".";
import { updateSidebar } from "./sidebar";

const projectFormLogic = (parentDiv) => {
  const projectFormWrapper = projectForm();
  parentDiv.append(projectFormWrapper);

  const form = document.getElementById("newProjectForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formInputs = {};
    const formData = new FormData(form);
    for (const pair of formData) {
      formInputs[pair[0]] = pair[1];
    }

    const projectTitle = formInputs.title; // Placeholder
    const projectDescription = formInputs.description; // Placeholder

    const newProject = TodoProject(
      projectCounter.plus(),
      projectTitle,
      projectDescription
    ); // Need to pass projectCounter
    allProjects.push(newProject);
    currentProject.set(newProject);

    updateSidebar();
    saveToLocalStorage();

    hideProjectForm(projectFormWrapper);
  });
};

function hideProjectForm(projectFormWrapper) {
  projectFormWrapper.classList.remove("z-50");
  projectFormWrapper.classList.add("hidden");
}

export { projectFormLogic };