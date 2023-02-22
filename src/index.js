// CSS Files
import './styles.css';

import TodoProject from "./todoProject";
import { SidebarBuilder } from './buildSidebar';
import { ProjectDisplayFactory } from "./projectPage";
import { projectForm } from './projectForm'; 
import { projectFormLogic } from './projectFormLogic';

// Create a new project
//
// Psuedocode
// we need a counter variable to count how many projects there are
// We need a currentProject variable that is undefined
// We need to create an array of all projects that starts as empty
// Run a check to see if the all-Projets array is empty, if empty, create a new project using the counter
// Set the currentProject to the first entry to allProjects (now the new projects)
const counter = {
    init: function() {
        this.number = 0;
    },
    plus: function() {
        this.number += 1;
        return this.number
    },
    count: function() {
        return this.number;
    }
};

const projectCounter = Object.create(counter);
projectCounter.init();

let currentProject = []; // Now it is an array of 1 items
let allProjects = []; 
if (allProjects.length === 0) {
    let newProject = TodoProject(projectCounter.plus(), 'Default Project', "A brief description about the scope of this project.");
    allProjects.push(newProject);
    currentProject[0] = newProject;
} else {
    // Create ability to create new projects and/or switch to projects later
}

const parentContainer = document.getElementById('content');
SidebarBuilder(parentContainer, allProjects);
let display = ProjectDisplayFactory(parentContainer, currentProject[0]);
parentContainer.addEventListener('click', () => {
    console.log(currentProject[0].getName())
})
projectFormLogic(parentContainer)
// The following sections ensure that mobile applications can access the sidebar

//let sidebarPointer = document.getElementById('sidebar');
//let collapsedSidebarPointer = document.getElementById('collapsed-sidebar');

import { appendTaskModal } from './taskFormLogic';
// appendTaskModal(parentContainer);

export { projectCounter, allProjects, currentProject };
