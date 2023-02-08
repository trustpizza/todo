import { SidebarFactory, CollapsedSidebarFactory } from "./sidebar"

function buildSidebar(parent, ...children) {
    for (const child of children[0]) {
        parent.appendChild(child);
    }
}

const sidebar = SidebarFactory(allProjects);
const collapsedSidebar = CollapsedSidebarFactory();

const SidebarBuilder = (parent, ...children) {
    buildSidebar(parent, ...children);

    let sidebar;
    let collapsedSidebar;

}

// Declare the sidebar variables here
// Add event listeners to the sidebar as needed
// Move the functions which handle them to here
// Call them in index.js
// Wrap in a Sidebar Manager?

