import { projectForm } from "./projectForm";
import TodoProject from "./todoProject";
import { projectCounter, allProjects, currentProject } from ".";

const projectFormLogic = (parentDiv) => {
    parentDiv.append(projectForm());
    const form = document.getElementById('newProjectForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formInputs = {};
        const formData = new FormData(form)
        for (const pair of formData) {
            formInputs[pair[0]] = pair[1];
        };

        let projectTitle = formInputs.title; // Placeholder
        let projectDescription = formInputs.description; // Placeholder

        const newProject = TodoProject(projectCounter.plus(), projectTitle, projectDescription); // Need to pass projectCounter
        allProjects.push(newProject);
        currentProject.set(newProject);

        
    })
}

export { projectFormLogic } 