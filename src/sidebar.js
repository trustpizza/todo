import ExclamationPoint from './photos/exclamation-thick.svg'

const sidebar = (parent) => {
    let sidebar = document.createElement('div');
    sidebar.id = "sidebar";
    sidebar.className = "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50";

    let title = document.createElement('h3');
    title.textContent = "Projects";
    title.className = "md:text-3xl text-center pt-4"

    let sidebarList = document.createElement("ul");
    sidebarList.className = 'space-y-2';

    let item = document.createElement('li');

    let link = document.createElement('a');
    link.href = "#"
    link.className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg"

    let linkImage = new Image();
    linkImage.src = ExclamationPoint;
    linkImage.className = "h-6 w'6 text-gray-500 transition duration-75"
    link.appendChild(linkImage);

    let linkSpan = document.createElement('span');
    linkSpan.className = "ml-3";
    linkSpan.textContent = 'Dashboard';

    link.appendChild(linkSpan);
    item.appendChild(link);

    sidebarList.appendChild(item);
    

    
    // Sidebar will eventually house other elements
    sidebar.appendChild(title);
    sidebar.appendChild(sidebarList);
    parent.appendChild(sidebar);
};

export default sidebar;