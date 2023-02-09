import ExclamationPoint from './photos/exclamation-thick.svg'
import HamburgerMenu from './photos/menu.svg'

const CollapsedSidebarFactory = () => {
    let collapsedSidebar = document.createElement('button');
    collapsedSidebar.id = 'collapsed-sidebar'
    collapsedSidebar.className = "fixed inline-flex self-start items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    
    let collapsedSpan = document.createElement('span');
    collapsedSpan.className = "sr-only";
    collapsedSpan.textContent = "Open Sidebar";

    let collapsedSVG = new Image();
    collapsedSVG.className = "w-6 h-6";
    collapsedSVG.src = HamburgerMenu;

    collapsedSidebar.appendChild(collapsedSpan);
    collapsedSidebar.appendChild(collapsedSVG);
    
    return collapsedSidebar;
}

const SidebarFactory = (projects) => {
    // Normal Sidebar
    let sidebar = document.createElement('aside');
    sidebar.id = "sidebar";
    sidebar.className = "hidden md:relative fixed md:block top-0 left-0 z-40 w-64 md:w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50";

    let sidebarContainer = document.createElement('div');
    sidebarContainer.className = "h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800";

    let list = document.createElement('ul');
    list.className = "space-y-2";

    for (const project of projects) {
        list.appendChild(ListItemFactory(project.getName()))
    }

    sidebarContainer.appendChild(list);
    sidebar.appendChild(sidebarContainer);
    // Sidebar will eventually house other elements
    return sidebar;    
};

const ListItemFactory = (title) => {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";

    let listImg = new Image();
    listImg.className = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    listImg.src = ExclamationPoint;

    let listSpan = document.createElement('span');
    listSpan.className = "ml-3";
    listSpan.textContent = title;

    link.appendChild(listImg);
    link.appendChild(listSpan);
    listItem.appendChild(link);

    return listItem;
}

// Each time you click on a  

export { SidebarFactory, CollapsedSidebarFactory };