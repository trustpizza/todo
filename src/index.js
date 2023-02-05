// CSS Files
import './reset.css';
import './styles.css';

import TodoProject from "./todoProject";

// Create a new project
//
// Psuedocode
// we need a counter variable to count how many projects there are
// We need a currentProject variable that is undefined
// We need to create an array of all projects that starts as empty
// Run a check to see if the all-Projets array is empty, if empty, create a new project using the counter
// Set the currentProject to the first entry to allProjects (now the new projects)
let projectCounter = 0;
let currentProject;
let allProjects = [];
if (allProjects.length === 0) {
    let newProject = TodoProject(projectCounter++, 'Default Project')
    allProjects.push(newProject);
    currentProject = newProject;
} else {
    // Create ability to create new projects and/or switch to projects later
}

// Create modal which has the Todo Task Form
let parentContainer = document.getElementById("content");
//import { appendTaskModal } from './appendTaskModal';
//  appendTaskModal(parentContainer);