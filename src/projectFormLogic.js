import { projectForm } from "./projectForm";
import TodoProject from "./todoProject";


const projectFormLogic = (allProjects, parentDiv, projectCounter) => {
    parentDiv.append(projectForm());
    const form = document.getElementById('newProjectForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let projectTitle = 'Title'; // Placeholder
        
        let projectDescription = 'Description'; // Placeholder

        const newProject = TodoProject(projectCounter++, projectTitle, projectDescription); // Need to pass projectCounter
        allProjects.push(newProject);
        console.log(projectCounter);
        
    })
}

export { projectFormLogic } 