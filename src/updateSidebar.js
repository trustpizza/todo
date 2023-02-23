// This will handle the updating of the sidebar
import { allProjects, parentContainer } from '.';
import { sidebarList, ListItemFactory } from './sidebar';

const updateSidebar = () => {
    sidebarList.innerHTML = null;
    sidebarList.appendChild(newProjectButton())
    for (const project of allProjects) {
        sidebarList.appendChild(ListItemFactory(project.getName()))
    }
};

const newProjectButton = () => {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";

    let listSpan = document.createElement('span');
    listSpan.className = "ml-3";
    listSpan.textContent = "Create New Project";

    link.appendChild(listSpan);
    listItem.append(link);

    link.addEventListener('click', () => {
        let newProjectForm = document.getElementById('newProjectFormWrapper');
        if (newProjectForm.classList.contains('hidden')) {
            newProjectForm.classList.remove('hidden')
            newProjectForm.classList.add('z-50');
        } else {
            newProjectForm.classList.remove('z-50')
            newProjectForm.classList.add('hidden');
        }
    })
    return listItem;
}

export { updateSidebar }