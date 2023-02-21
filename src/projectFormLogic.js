import { projectForm } from "./projectForm"

const projectFormLogic = (allProjects, parentDiv) => {
    const projForm = projectForm();
    parentDiv.append(projForm);
}

export { projectFormLogic } 