import ExclamationPoint from './photos/exclamation-thick.svg'

const sidebar = (parent) => {
    let sidebar = document.createElement('aside');
    sidebar.id = "sidebar";
    sidebar.className = "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50";

    let sidebarContainer = document.createElement('div');
    sidebarContainer.className = "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800";

    let list = document.createElement('ul');
    list.className = "space-y-2";

    console.log(listItemFactory("Project"));
    
    //list.appendChild(listItem);
    sidebarContainer.appendChild(list);
    sidebar.appendChild(sidebarContainer);
    // Sidebar will eventually house other elements
    parent.appendChild(sidebar);
};

const listItemFactory = (title) => {
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

export default sidebar;