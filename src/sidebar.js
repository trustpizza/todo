import ExclamationPoint from "./photos/exclamation-thick.svg";
import HamburgerMenu from "./photos/menu.svg";
import RedTrashCan from "./photos/trash-can-outline-red.svg"
import { allProjects, currentProject, reloadProjectDisplay, saveToLocalStorage } from ".";

const sidebarList = document.createElement("ul");

const CollapsedSidebarFactory = () => {
  const collapsedSidebar = document.createElement("button");
  collapsedSidebar.id = "collapsed-sidebar";
  collapsedSidebar.className =
    "fixed inline-flex self-start items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";

  const collapsedSpan = document.createElement("span");
  collapsedSpan.className = "sr-only";
  collapsedSpan.textContent = "Open Sidebar";

  const collapsedSVG = new Image();
  collapsedSVG.className = "w-6 h-6";
  collapsedSVG.src = HamburgerMenu;

  collapsedSidebar.append(collapsedSpan, collapsedSVG);
  return collapsedSidebar;
};

const SidebarFactory = () => {
  // Normal Sidebar
  const sidebar = document.createElement("aside");
  sidebar.id = "sidebar";
  sidebar.className =
    "hidden md:relative fixed md:block top-0 left-0 z-40 w-64 md:w-4/12 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50";

  const sidebarContainer = document.createElement("div");
  sidebarContainer.className =
    "h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800";

  sidebarList.className = "space-y-2";

  // Needs new sidebar item button!

  // Create a function that updates the sidebar here!
  updateSidebar();


  sidebarContainer.appendChild(sidebarList);
  sidebar.appendChild(sidebarContainer);
  // Sidebar will eventually house other elements
  return sidebar;
};

const ListItemFactory = (project) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.className =
    "flex flex-grow items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";

  const listImg = new Image();
  listImg.className =
    "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
  listImg.src = ExclamationPoint;

  const deleteButton = deleteProjectButton(project);

  const downloadButton = downloadProjectButton(project)
  

  const listSpan = document.createElement("span");
  listSpan.className = "ml-3";
  listSpan.textContent = project.getName();

  link.append(listImg, listSpan);

  listItem.className =
    "flex items-center justify-between"
  listItem.append(link, downloadButton, deleteButton);

  link.addEventListener("click", () => {
    currentProject.set(project);
    reloadProjectDisplay();
  });
  return listItem;
};

function updateSidebar(){
  // SIDEBAR RELOAD HAPPENS HERE!
  while (sidebarList.firstChild) {
    sidebarList.removeChild(sidebarList.firstChild)
  }

  sidebarList.appendChild(newProjectButton());
  for (const project of allProjects) {
    sidebarList.appendChild(ListItemFactory(project));
  }
};

const deleteProjectButton = (project) => {
  const deleteButton = document.createElement('button');
  deleteButton.className = 
    "w-8 h-8"
  const redTrashImg = new Image();
  redTrashImg.className = 
    "w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
  redTrashImg.src = RedTrashCan;

  deleteButton.addEventListener('click', () => {
    const index = allProjects.indexOf(project);
    
    if (allProjects.length > 1) {
      if (currentProject.get() == project ) {
        setNewCurrentProject(index);
        reloadProjectDisplay();
      };
      allProjects.splice(index, 1)
      updateSidebar();
      saveToLocalStorage();
    } else {
      alert('You must have at least 1 project')
    }
  })
  deleteButton.appendChild(redTrashImg)
  return deleteButton;
};

const downloadProjectButton = (project) => {
  const downloadButton = document.createElement('button');

  return downloadButton
}

function setNewCurrentProject(index) {
  if (index === 0) {
    currentProject.set(allProjects[index + 1])
  } else {
    currentProject.set(allProjects[index - 1])
  }
}

const newProjectButton = () => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.className =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";

  const listSpan = document.createElement("span");
  listSpan.className = "ml-3";
  listSpan.textContent = "Create New Project";

  link.appendChild(listSpan);
  listItem.append(link);

  link.addEventListener("click", () => {
    const newProjectFormWrapper = document.getElementById(
      "newProjectFormWrapper"
    );
    if (newProjectFormWrapper.classList.contains("hidden")) {
      newProjectFormWrapper.classList.remove("hidden");
      newProjectFormWrapper.classList.add("z-50");
    } else {
      newProjectFormWrapper.classList.remove("z-50");
      newProjectFormWrapper.classList.add("hidden");
    }
  });

  return listItem;
};

// Each time you click on a

export { SidebarFactory, CollapsedSidebarFactory, updateSidebar };
