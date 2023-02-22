import { projectForm } from "./projectForm";
import TodoProject from "./todoProject";
import { projectCounter, allProjects, currentProject } from ".";

const projectFormLogic = (parentDiv) => {
    parentDiv.append(projectForm());
    const form = document.getElementById('newProjectForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let projectTitle = 'Title'; // Placeholder
        
        let projectDescription = 'Description'; // Placeholder

        const newProject = TodoProject(projectCounter.plus(), projectTitle, projectDescription); // Need to pass projectCounter
        allProjects.push(newProject);
        currentProject[0] = newProject
    })
}

export { projectFormLogic } 