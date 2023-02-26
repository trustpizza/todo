// CSS Files
import "./styles.css";

import TodoProject from "./todoProject";
import { SidebarBuilder } from "./buildSidebar";
import { ProjectDisplayFactory } from "./projectPage";
import { projectFormDisplayFactory } from "./projectForm";

const counter = {
  init() {
    this.number = 0;
  },
  plus() {
    this.number += 1;
    return this.number;
  },
  count() {
    return this.number;
  },
};

const currentProjectObject = {
  init() {
    this.project;
    return null;
  },
  set(newProject) {
    this.project = newProject;
    return this.project;
  },
  get() {
    return this.project;
  },
};

const projectCounter = Object.create(counter);
projectCounter.init();

const currentProject = Object.create(currentProjectObject); // Now it is an array of 1 items
let allProjects = JSON.parse(localStorage.getItem("projects") || "[]");

if (allProjects.length === 0) {
  const newProject = TodoProject(
    projectCounter.plus(),
    "Default Project",
    "A brief description about the scope of this project."
  );

  allProjects.push(newProject);
  currentProject.set(newProject);
} else {
  allProjects = allProjects.map((project) => {
    const newProject = TodoProject(
      projectCounter.plus(),
      project.name,
      project.description,
      project.tasks,
      project.counter
    );
    return newProject;
  });
  currentProject.set(allProjects[0]);
}

const parentContainer = document.getElementById("content");
const sidebarDisplay = SidebarBuilder(parentContainer, allProjects);

const displayProject = ProjectDisplayFactory(currentProject.get());
reloadProjectDisplay();

parentContainer.appendChild(displayProject.container);

parentContainer.addEventListener("click", (e) => {
  const { sidebar } = sidebarDisplay;
  if (
    e.target !== sidebar &&
    !sidebar.contains(e.target) &&
    !sidebar.classList.contains("-translate-x-full") &&
    e.target != collapsedSidebar &&
    !collapsedSidebar.contains(e.target)
  ) {
    sidebar.closeSidebar();
  }
});

projectFormDisplayFactory(parentContainer);
// The following sections ensure that mobile applications can access the sidebar

function reloadProjectDisplay() {
  displayProject.update(currentProject.get());
}

function saveToLocalStorage() {
  const projects = [];
  for (const project of allProjects) {
    const projObj = {
      counter: project.getCounter(),
      description: project.getDesc(),
      name: project.getName(),
      tasks: project.getTodoTasks(),
    };
    projects.push(projObj);
  }
  localStorage.setItem("projects", JSON.stringify(projects));
}

// let sidebarPointer = document.getElementById('sidebar');
// let collapsedSidebarPointer = document.getElementById('collapsed-sidebar');

export {
  projectCounter,
  allProjects,
  parentContainer,
  currentProject,
  sidebarDisplay,
  reloadProjectDisplay,
  saveToLocalStorage,
};
