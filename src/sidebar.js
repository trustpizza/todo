import ExclamationPoint from './photos/exclamation-thick.svg'

const sidebar = (parent) => {
    let sidebar = document.createElement('div');
    sidebar.id = "sidebar";
    sidebar.className = "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50";

       
    // Sidebar will eventually house other elements
    parent.appendChild(sidebar);
};

export default sidebar;