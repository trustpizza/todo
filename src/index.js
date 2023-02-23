// CSS Files
import './styles.css';

import TodoProject from "./todoProject";
import { SidebarBuilder } from './buildSidebar';
import { ProjectDisplayFactory } from "./projectPage";
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

const currentProjectObject = {
    init: function() {
        this.project;
        return null;
    },
    set: function(newProject) {
        this.project = newProject;
        return this.project;
    },
    get: function() {
        return this.project
    }
}

const projectCounter = Object.create(counter);
projectCounter.init();

let currentProject = Object.create(currentProjectObject); // Now it is an array of 1 items
const allProjects = []; 
if (allProjects.length === 0) {
    let newProject = TodoProject(projectCounter.plus(), 'Default Project', "A brief description about the scope of this project.");
    allProjects.push(newProject);
    currentProject.set(newProject);
} else {
    // Create ability to create new projects and/or switch to projects later
}

const parentContainer = document.getElementById('content');
const sidebarDisplay = SidebarBuilder(parentContainer, allProjects);

const display = ProjectDisplayFactory(parentContainer, currentProject.get());
parentContainer.addEventListener('click', (e) => {
    let sidebar = sidebarDisplay.sidebar
    if (e.target !== sidebar && !sidebar.contains(e.target) && !sidebar.classList.contains('-translate-x-full') && e.target != collapsedSidebar && !collapsedSidebar.contains(e.target)) {
        sidebar.closeSidebar();
    }
})
projectFormLogic(parentContainer)
// The following sections ensure that mobile applications can access the sidebar

//let sidebarPointer = document.getElementById('sidebar');
//let collapsedSidebarPointer = document.getElementById('collapsed-sidebar');


export { projectCounter, allProjects, parentContainer, currentProject, sidebarDisplay };
