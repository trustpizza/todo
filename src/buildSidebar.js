import { delay } from "lodash";
import { SidebarFactory, CollapsedSidebarFactory } from "./sidebar"


const SidebarBuilder = (parent, projects) => {
    const sidebar = SidebarFactory(projects);
    const collapsedSidebar = CollapsedSidebarFactory();

    buildSidebar(parent, [sidebar, collapsedSidebar]);

    collapsedSidebar.addEventListener("click", (e) => {
        if (sidebar.classList.contains('-translate-x-full')) {
            openSidebar();
        } 
    });
    
    parent.addEventListener("click", (e) => {
        if (e.target !== sidebar && !sidebar.contains(e.target) && !sidebar.classList.contains('-translate-x-full') && e.target != collapsedSidebar && !collapsedSidebar.contains(e.target)) {
            closeSidebar();
        }
        // This checks to make sure that neither the sidebar, any of the sidebar's children, the collapsedSidebar button NOr its children are the event Target
    });

    const closeSidebar = () => {
        collapsedSidebar.classList.remove('hidden');
        sidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            sidebar.classList.add('hidden')
        }, 100);
        //sidebar.classList.add('fixed');
    }

    const openSidebar = () => {
        collapsedSidebar.classList.add('hidden')
        sidebar.classList.remove('hidden');
        setTimeout(() => {
            sidebar.classList.remove('-translate-x-full');
        }, 100)
    }
};

const buildSidebar = (parent, ...children) => {
    for (const child of children[0]) {
        parent.appendChild(child);
    } 
};

export {SidebarBuilder};

// Declare the sidebar variables here
// Add event listeners to the sidebar as needed
// Move the functions which handle them to here
// Call them in index.js
// Wrap in a Sidebar Manager?
