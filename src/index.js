// CSS Files
import './styles.css';

import TodoProject from "./todoProject";
import { SidebarBuilder } from './buildSidebar';
import { ProjectDisplayFactory } from "./projectPage";
import { projectFormLogic } from './projectFormLogic';

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
let allProjects = JSON.parse(localStorage.getItem('projects') || '[]')

if (allProjects.length === 0) {
    let newProject = TodoProject(projectCounter.plus(), 'Default Project', "A brief description about the scope of this project.");

    allProjects.push(newProject);
    currentProject.set(newProject);
} else {
    allProjects = allProjects.map(project => {
        const newProject = TodoProject(projectCounter.plus(), project.name, project.description, project.tasks)
        return newProject
    })
    currentProject.set(allProjects[0]);
}

const parentContainer = document.getElementById('content');
const sidebarDisplay = SidebarBuilder(parentContainer, allProjects);

const displayProject = ProjectDisplayFactory(currentProject.get());


parentContainer.appendChild(displayProject.container)

parentContainer.addEventListener('click', (e) => {
    let sidebar = sidebarDisplay.sidebar
    if (e.target !== sidebar && !sidebar.contains(e.target) && !sidebar.classList.contains('-translate-x-full') && e.target != collapsedSidebar && !collapsedSidebar.contains(e.target)) {
        sidebar.closeSidebar();
    }
    // reloadProjectDisplay();
})
projectFormLogic(parentContainer)
// The following sections ensure that mobile applications can access the sidebar

function reloadProjectDisplay() {
    let projectDisplay = document.getElementById('projectDisplay');
    displayProject.update(currentProject.get())
}

function saveToLocalStorage() {
    let projects = []
    for (const project of allProjects) {
        const projObj = {
            counter: project.getCounter(),
            description: project.getDesc(),
            name: project.getName(),
            tasks: project.getTodoTasks()
        }
        projects.push(projObj)
    }
    localStorage.setItem('projects', JSON.stringify(projects));

}


//let sidebarPointer = document.getElementById('sidebar');
//let collapsedSidebarPointer = document.getElementById('collapsed-sidebar');


export { projectCounter, allProjects, parentContainer, currentProject, sidebarDisplay, reloadProjectDisplay, saveToLocalStorage };
