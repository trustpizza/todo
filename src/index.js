// CSS Files
import './styles.css';

import TodoProject from "./todoProject";
import { SidebarFactory, CollapsedSidebarFactory } from "./sidebar"
import buildSidebar from "./buildSidebar"

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

const parentContainer = document.getElementById('content');
const sidebar = SidebarFactory(allProjects);
const collapsedSidebar = CollapsedSidebarFactory();

collapsedSidebar.addEventListener("click", (e) => {
    if (sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.remove('-translate-x-full');
    } 
});
parentContainer.addEventListener("click", (e) => {
    console.log(e.target != sidebar || sidebar.contains(e.target) && !sidebar.classList.contains('-translate-x-full'))
    //if ((e.target == sidebar || sidebar.contains(e.target)) && !sidebar.classList.contains('-translate-x-full')) {
    //    sidebar.classList.add('-translate-x-full');
    //}
    // if
})

buildSidebar(parentContainer, [sidebar, collapsedSidebar])

//let sidebarPointer = document.getElementById('sidebar');
//let collapsedSidebarPointer = document.getElementById('collapsed-sidebar');


// import { appendTaskModal } from './appendTaskModal';
// appendTaskModal(parentContainer);